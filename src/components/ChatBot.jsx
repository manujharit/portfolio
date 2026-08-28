import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './ChatBot.scss';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hi! I'm Manuj's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [availableModels, setAvailableModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [isFetchingModels, setIsFetchingModels] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Fetch models on mount
  useEffect(() => {
    const fetchModels = async () => {
      setIsFetchingModels(true);
      try {
        const res = await fetch('/api/models');
        if (res.ok) {
          const data = await res.json();
          setAvailableModels(data.models || []);
          if (data.models && data.models.length > 0) {
            setSelectedModel(data.models[0]);
          }
        }
      } catch (err) {
        console.error('Failed to fetch models:', err);
      } finally {
        setIsFetchingModels(false);
      }
    };
    fetchModels();
  }, []);

  const handleSend = async () => {
    if (!input.trim() || !selectedModel) return;

    const userMessage = { role: 'user', text: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userMessage.text,
          history: messages,
          model: selectedModel
        })
      });

      if (response.status === 404) {
        throw new Error("Chat API endpoint not found. If running locally, ensure you are using 'npm run vercel-dev' so serverless functions work.");
      }

      if (!response.ok) {
        let errorMsg = 'Failed to get response';
        try {
          const errorData = await response.json();
          if (errorData.error) errorMsg = errorData.error;
        } catch (e) {
          // ignore parse error
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      setMessages([...newMessages, { role: 'model', text: data.reply }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages([...newMessages, { role: 'model', text: `Error: ${error.message || "Sorry, I'm having trouble connecting right now."}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`chatbot-wrapper ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="chatbot-toggle-btn" onClick={() => setIsOpen(true)} aria-label="Open AI Assistant">
          <FaRobot size={24} />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <FaRobot />
              <span>AI Assistant</span>
            </div>
            
            <div className="chatbot-header-controls">
              {availableModels.length > 0 ? (
                <select 
                  className="model-select" 
                  value={selectedModel} 
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={isLoading}
                  aria-label="Select AI Model"
                >
                  {availableModels.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              ) : (
                <span className="model-fallback">{isFetchingModels ? 'Loading models...' : 'No models found'}</span>
              )}
              
              <button className="chatbot-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Assistant">
                <FaTimes />
              </button>
            </div>
          </div>

          <div className="chatbot-messages" aria-live="polite">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-msg ${msg.role}`}>
                <div className="chatbot-msg-bubble">
                  {msg.role === 'model' ? (
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" />
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-msg model">
                <div className="chatbot-msg-bubble loading">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              placeholder={availableModels.length === 0 ? "Connect Ollama to chat..." : "Ask me about Manuj's resume..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading || availableModels.length === 0}
            />
            <button onClick={handleSend} disabled={isLoading || !input.trim() || availableModels.length === 0} aria-label="Send message">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

