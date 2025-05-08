import React, { useEffect, useState, useRef } from 'react';

const messageSequence = [
  { sender: 'abyss', text: 'Hello Ali, how are you today?' },
  { sender: 'user', text: 'Not bad Abyss, could be better.' },
  { sender: 'abyss', text: "No problem, you can talk with me — I'm always here for you." },
  { sender: 'user', text: 'Thanks Abyss!' },
];

const Chat = () => {
  const [visibleMessages, setVisibleMessages] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    messageSequence.forEach((msg, i) => {
      const delay = i * 1600; // consistent delay
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg]);
      }, delay);
    });
  }, [started]);

  return (
    <div
      ref={containerRef}
      className="bg-white border border-gray-800 rounded-2xl shadow-md p-6 w-[500px] h-[500px] overflow-y-auto flex flex-col gap-4"
    >
      {visibleMessages.map((msg, i) => (
        <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`${
              msg.sender === 'user' ? 'bg-gray-200 rounded-br-none' : 'bg-blue-200 rounded-bl-none'
            } text-gray-900 p-3 rounded-2xl max-w-[75%] transition-all duration-500 ease-in`}
          >
            <h1>{msg.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
