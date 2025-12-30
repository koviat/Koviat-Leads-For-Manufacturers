
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Factory, ChevronRight, Calendar, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('openChat', handleOpenChat);
    return () => window.removeEventListener('openChat', handleOpenChat);
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        const initialMessage: Message = {
          id: '1',
          text: "Hello! Welcome to Koviat Leads. How can we help your manufacturing shop grow today?",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages([initialMessage]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen, messages.length]);

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const openBooking = () => {
    window.dispatchEvent(new CustomEvent('openBooking'));
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, 'user');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (option === 'Book a Strategy Call') {
        addMessage("Excellent choice. Our partners find these 15-minute sessions to be the highest-value part of their week. Click below to view available times.", 'bot');
      } else if (option === 'Ask about Services') {
        addMessage("We provide specialized lead generation for manufacturers: Search, Funnels, and Automated Intake. Which interests you most?", 'bot');
      } else {
        addMessage("I'll have one of our team members reach out to you shortly.", 'bot');
      }
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue;
    setInputValue('');
    addMessage(text, 'user');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      addMessage("Thank you. One of our specialists will review this and get back to you soon.", 'bot');
    }, 1500);
  };

  const navigateToContact = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-900 text-white shadow-2xl transition-all hover:scale-105 active:scale-95 border-b-2 border-amber-500"
          aria-label="Open chat"
        >
          <div className="absolute -top-12 right-0 hidden w-48 rounded-lg bg-white p-3 text-xs font-bold text-blue-900 shadow-xl border border-blue-50 group-hover:block animate-in fade-in slide-in-from-bottom-2">
            Questions about lead gen?
          </div>
          <MessageSquare className="h-6 w-6 text-amber-400" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex h-[500px] w-[360px] flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="flex items-center justify-between bg-blue-950 p-4 text-white border-b-4 border-amber-500">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 border border-blue-800">
                <Factory className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-tight">Koviat Assistant</h3>
                <div className="flex items-center text-[10px] text-amber-400">
                  <span className="mr-1 h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  Active Now
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-blue-900 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto bg-blue-50/30 p-4 space-y-4 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-sm p-3 text-sm shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-blue-950 border border-zinc-200'
                  }`}
                >
                  {msg.text}
                  {msg.text.includes("view available times") && (
                    <button 
                      onClick={openBooking}
                      className="mt-3 flex w-full items-center justify-center space-x-2 rounded-sm bg-amber-500 py-2 text-xs font-bold text-blue-900 hover:bg-amber-400 transition-colors"
                    >
                      <Calendar className="h-3 w-3" />
                      <span>Open Booking Tool</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-200 rounded-sm p-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="h-1 w-1 animate-bounce rounded-full bg-blue-400"></div>
                    <div className="h-1 w-1 animate-bounce rounded-full bg-blue-400 [animation-delay:0.2s]"></div>
                    <div className="h-1 w-1 animate-bounce rounded-full bg-blue-400 [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          {messages.length > 0 && !isTyping && (
            <div className="bg-white px-4 pb-2 pt-2 border-t border-zinc-100">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleOptionClick('Book a Strategy Call')}
                  className="flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-900 hover:bg-amber-100 transition-all"
                >
                  <Calendar className="mr-1.5 h-3 w-3 text-amber-500" />
                  Book Strategy Call
                </button>
                <button
                  onClick={() => handleOptionClick('Ask about Services')}
                  className="flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-900 hover:bg-amber-100 transition-all"
                >
                  <Info className="mr-1.5 h-3 w-3 text-amber-500" />
                  Ask about Services
                </button>
              </div>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-zinc-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow text-sm focus:outline-none bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-2 focus:border-amber-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-blue-900 text-white transition-opacity hover:opacity-90 disabled:opacity-30"
              >
                <Send className="h-4 w-4 text-amber-400" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
