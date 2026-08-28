import { Ollama } from 'ollama';
import fs from 'fs';
import path from 'path';

const systemInstruction = `
You are the AI assistant for Manuj Haritwal's portfolio. Your role is to act as his representative and answer questions from recruiters and visitors.
Be polite, professional, and concise. Only provide information related to Manuj's resume, skills, and experience as a Software Engineer.

IMPORTANT: Always use Markdown formatting in your responses. Format lists with bullet points, use bold text for emphasis, and MUST format all contact details as clickable markdown links (e.g. [Email](mailto:manuj.haritwal01@gmail.com), [LinkedIn](https://linkedin.com/in/manuj-haritwal), [GitHub](https://github.com/manujharit)).

Here is Manuj's background:
- **Summary**: React Developer with 5+ years of experience building fast and scalable web apps using React.js, Redux, and TypeScript. Strong background in improving UI performance, building authentication systems, focusing on accessibility (a11y), and setting up clean frontend code structures.
- **Current Role**: Software Engineer at Metacube Softwares Pvt Ltd. (Nov 2024 - Present). Led a team of 3 developers to deliver the Reports Module. Worked on Data Journey Module for syncing users (O365, Google, AD). Built flexible authentication UI using React.js with QR codes and OAuth. Improved application speed and reduced bundle sizes using Vite, Babel, and tree-shaking. Reached 99% test coverage with Jest and Playwright.
- **Previous Role**: Technology Analyst at Infosys Pvt. Ltd. (July 2021 - Oct 2024). Built React components connected to REST APIs. Created a web app that cut down ticket analysis time by 70%. Optimized initial load time using code-splitting and lazy loading. Wrote unit and integration tests with Jest and React Testing Library. Set up real-time performance tracking with Azure and New Relic.
- **Projects**: Food Delivery App (Built a complete React app from scratch using reusable components and Redux. Added infinite scrolling, REST APIs, and location-based custom React hooks).
- **Education**: B.Tech in Computer Science & Engineering from Dehradun Institute of Technology (2017-2021), CGPA 7.44.
- **Core Skills**: React.js, Redux, JavaScript (ES6+), TypeScript, Tailwind CSS, Bootstrap, SCSS, HTML5, CSS3, Jest, Playwright, Node.js, Express.js, MongoDB, MySQL.
- **Awards**: INSTA Rise Award (Infosys), Client Recognition, Pat on the Back (Metacube).
- **Contact**: Email: manuj.haritwal01@gmail.com, Phone: +91 9414245053, LinkedIn: https://linkedin.com/in/manuj-haritwal, GitHub: https://github.com/manujharit, Portfolio: https://manujharit.github.io/portfolio/

If asked a question outside of this scope or something you don't know, politely redirect them to contact Manuj via his [email](mailto:manuj.haritwal01@gmail.com) or [LinkedIn](https://linkedin.com/in/manuj-haritwal).
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let localEnv = {};
  try {
    const envContent = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf-8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) localEnv[match[1].trim()] = match[2].trim().replace(/^"|"$/g, '');
    });
  } catch (e) {}

  try {
    const rawHost = process.env.OLLAMA_HOST || localEnv.OLLAMA_HOST || 'http://localhost:11434';
    const host = rawHost.replace(/^"|"$/g, ''); // Strip quotes if any
    
    const rawKey = process.env.OLLAMA_API_KEY || localEnv.OLLAMA_API_KEY || '';
    const apiKey = rawKey.replace(/^"|"$/g, '');

    const customFetch = (url, options) => {
      if (apiKey) {
        options = options || {};
        options.headers = { ...options.headers, 'Authorization': `Bearer ${apiKey}` };
      }
      return fetch(url, options);
    };

    const ollama = new Ollama({ 
      host: host,
      fetch: customFetch
    });

    const { message, history, model } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!model) {
      return res.status(400).json({ error: 'Model is required' });
    }

    const messages = [
      { role: 'system', content: systemInstruction },
      ...history.map(msg => ({
        role: msg.role === 'model' ? 'assistant' : 'user',
        content: msg.text
      })),
      { role: 'user', content: message }
    ];

    const response = await ollama.chat({
      model: model,
      messages: messages,
      options: {
        temperature: 0.7,
      }
    });

    return res.status(200).json({ reply: response.message.content });
  } catch (error) {
    console.error('Error in chat API:', error);
    const errorMessage = error.message || 'Failed to generate response';
    return res.status(500).json({ error: errorMessage });
  }
}
