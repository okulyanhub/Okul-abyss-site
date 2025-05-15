import React, { useState, useRef, useEffect } from 'react';

const DEMO_REPLIES = [
  "Merhaba! Size nasıl yardımcı olabilirim?",
  "Bu ilginç bir düşünce. Biraz daha açar mısınız?",
  "Görüşünüzü takdir ediyorum! 😊",
  "Haydi bunu birlikte anlamaya çalışalım.",
  "Ben bir simülasyonum ama elimden gelenin en iyisini yapacağım!"
];

export default function RealisticDemoChatbot() {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [typingBotMessage, setTypingBotMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typingBotMessage]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    simulateTyping();
  };

  const simulateTyping = () => {
    const fullReply = DEMO_REPLIES[Math.floor(Math.random() * DEMO_REPLIES.length)];
    let index = 0;
    setIsTyping(true);
    setTypingBotMessage('');

    const interval = setInterval(() => {
      setTypingBotMessage(prev => prev + fullReply.charAt(index));
      index++;
      if (index >= fullReply.length) {
        clearInterval(interval);
        setIsTyping(false);
        setMessages(prev => [...prev, { role: 'bot', content: fullReply }]);
        setTypingBotMessage('');
      }
    }, 30 + Math.random() * 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-blue-500 p-3 sm:p-4">
      <div className="text-xl font-bold text-white mb-3 text-center">🤖 Abyss Yapay Zekâ Simülasyonu</div>
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto bg-white rounded-xl p-3 shadow-inner space-y-2"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm whitespace-pre-line ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-600 px-4 py-2 text-sm rounded-2xl rounded-bl-none">
              {typingBotMessage}
              <span className="animate-pulse">▌</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-2 flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Mesajınızı yazın..."
          rows={1}
          className="flex-1 px-4 py-2 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
        />
        <button
          onClick={sendMessage}
          className="bg-white text-blue-600 px-4 py-2 rounded-xl border hover:bg-blue-100 text-sm font-semibold"
        >
          Gönder
        </button>
      </div>
    </div>
  );
}
