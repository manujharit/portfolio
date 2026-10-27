import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from "react-i18next";
import './ChatBot.scss';

const MODEL_NAME = 'gemma4:31b-cloud';

const ChatBot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: t("chatbot.hiAssistant") }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

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
          model: MODEL_NAME
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
              <span>{t("chatbot.aiAssistant")}</span>
            </div>
            
            <div className="chatbot-header-controls">
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
              placeholder={t("chatbot.chatPlaceholder")}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading || !input.trim()} aria-label="Send message">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

