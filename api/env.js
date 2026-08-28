export default function handler(req, res) {
  res.status(200).json({
    keys: Object.keys(process.env).filter(k => k.startsWith('OLLAMA') || k.startsWith('GEMINI')),
    OLLAMA_HOST: process.env.OLLAMA_HOST || 'not set',
    raw_env_content: process.env.OLLAMA_HOST
  });
}
