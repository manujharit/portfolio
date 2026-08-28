import { Ollama } from 'ollama';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
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

    const response = await ollama.list();
    
    // Extract model names
    const models = response.models.map(m => m.name);
    
    return res.status(200).json({ models });
  } catch (error) {
    console.error('Error fetching models:', error);
    return res.status(500).json({ error: `Failed to fetch available models (host: ${process.env.OLLAMA_HOST}): ` + (error.message || String(error)) });
  }
}
