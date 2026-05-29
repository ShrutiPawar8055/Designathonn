import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, Sparkles, Volume2, User, Bot, History, Settings, Info, ArrowLeft, MoreVertical, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AIGuide = () => {
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'voice'
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Greetings, traveler. I am Reverie, your guide through the soul of India. Close your eyes for a moment, and let us journey together through time and memory. What place calls to you today?',
      timestamp: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const { language } = useLanguage();

  const getNarrativeResponse = (userQuery) => {
    const responses = [
      "Ah, what a wonderful question! Picture this: centuries ago, under that very sky, poets sang of this land, and kings built dreams in stone. Let me tell you the story as it was whispered through generations...",
      "Let me paint this for you. The sun is setting over the horizon, casting golden light on ancient walls. Close your eyes and listen—history is speaking to us...",
      "Imagine walking through those gates hundreds of years ago. The air is filled with the scent of incense, the sound of bells, and the murmur of pilgrims. Let me walk you through that moment...",
      "This is where legends were born. Let me tell you the tale as the storytellers of old would have shared it—with passion, with reverence, and with all the color of life...",
      "Listen carefully. The stones here remember everything. Let me share their memories with you, woven into a narrative that will make you feel like you were there..."
    ];
    
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessage = { id: Date.now(), type: 'user', content: inputValue, timestamp: 'Just now' };
    setMessages([...messages, newMessage]);
    setInputValue('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: getNarrativeResponse(inputValue),
        timestamp: 'Just now'
      }]);
    }, 1200);
  };

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24 pb-12 bg-background-light dark:bg-background-dark flex flex-col">
        <div className="container mx-auto px-6 flex-grow flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Historical Context & Settings */}
          <aside className="hidden lg:flex lg:w-80 flex-col gap-6">
            <div className="bg-surface-light dark:bg-surface-dark border border-border/10 rounded-[2rem] p-8 shadow-sm">
              <h3 className="ui-label text-xs mb-6 flex items-center gap-2">
                <History size={14} className="text-accent-light dark:text-accent-dark" />
                STORIES WE'VE SHARED
              </h3>
              <div className="space-y-4">
                {['Varanasi at Dawn', 'The Taj’s Silent Promise', 'Somnath’s Eternal Flame'].map((item, i) => (
                  <button key={i} className="w-full text-left text-xs opacity-60 hover:opacity-100 transition-opacity flex items-center gap-3 group">
                    <div className="w-1 h-1 rounded-full bg-border dark:bg-border group-hover:bg-accent-light dark:group-hover:bg-accent-dark transition-colors" />
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark border border-border/10 rounded-[2rem] p-8 flex-grow">
              <h3 className="ui-label text-xs mb-6 flex items-center gap-2">
                <Settings size={14} className="text-accent-light dark:text-accent-dark" />
                NARRATOR SETTINGS
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] ui-label opacity-40 mb-3">LANGUAGE OF STORIES</p>
                  <div className="flex items-center gap-2 text-xs opacity-80">
                    <Globe size={14} />
                    <span>Selected: {language.toUpperCase()}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] ui-label opacity-40 mb-3">TONE OF VOICE</p>
                  <select className="bg-transparent border-b border-border/20 text-xs py-1 w-full focus:outline-none focus:border-accent-light dark:focus:border-accent-dark cursor-pointer">
                    <option>Wise & Storytelling</option>
                    <option>Scholarly & Detailed</option>
                    <option>Warm & Friendly</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Interface */}
          <main className="flex-grow flex flex-col bg-surface-light dark:bg-surface-dark border border-border/10 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
            
            {/* Interface Header */}
            <header className="p-6 md:p-8 border-b border-border/10 flex items-center justify-between bg-heritage-light/5 dark:bg-heritage-dark/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-light dark:bg-accent-dark flex items-center justify-center text-white shadow-xl">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h2 className="heading-h3 text-xl">Reverie Guide</h2>
                  <p className="text-[10px] ui-label opacity-40">Your storyteller of India's heritage</p>
                </div>
              </div>
              <div className="flex items-center bg-background-light/50 dark:bg-background-dark/50 p-1 rounded-full border border-border/10">
                <button 
                  onClick={() => setActiveTab('chat')}
                  className={`px-6 py-2 rounded-full text-[10px] ui-label transition-all ${activeTab === 'chat' ? 'bg-heritage-light dark:bg-heritage-dark text-white shadow-md' : 'opacity-40 hover:opacity-100'}`}
                >
                  READ & CHAT
                </button>
                <button 
                  onClick={() => setActiveTab('voice')}
                  className={`px-6 py-2 rounded-full text-[10px] ui-label transition-all ${activeTab === 'voice' ? 'bg-heritage-light dark:bg-heritage-dark text-white shadow-md' : 'opacity-40 hover:opacity-100'}`}
                >
                  LISTEN
                </button>
              </div>
            </header>

            {/* Content Area */}
            <div className="flex-grow overflow-hidden relative">
              <AnimatePresence mode="wait">
                {activeTab === 'chat' ? (
                  <motion.div 
                    key="chat"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex flex-col p-6 md:p-8 overflow-y-auto space-y-6"
                  >
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] flex gap-4 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'user' ? 'bg-heritage-light dark:bg-heritage-dark text-white' : 'bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark'}`}>
                            {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                          </div>
                          <div className={`p-5 rounded-3xl shadow-sm border border-border/5 ${msg.type === 'user' ? 'bg-heritage-light/10 dark:bg-heritage-dark/10 rounded-tr-none' : 'bg-background-light dark:bg-background-dark rounded-tl-none'}`}>
                            <p className="body-text text-sm leading-relaxed">{msg.content}</p>
                            <p className="text-[8px] ui-label opacity-30 mt-3 text-right">{msg.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="voice"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="relative mb-12">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-accent-light/20 dark:bg-accent-dark/20 rounded-full blur-3xl"
                      />
                      <div className="w-48 h-48 rounded-full border-2 border-accent-light/30 dark:border-accent-dark/30 flex items-center justify-center relative bg-background-light dark:bg-background-dark shadow-2xl">
                        <Mic size={48} className="text-accent-light dark:text-accent-dark" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          {[1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                              transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
                              className="absolute w-full h-full border border-accent-light/20 dark:border-accent-dark/20 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <h2 className="heading-h3 text-2xl mb-4">Listening to Your Voice...</h2>
                    <p className="body-text text-sm opacity-80 max-w-xs mb-12">
                      Speak to me. Ask about a place, a legend, or the hidden meanings behind the ancient stones. I will listen, and I will tell you stories as they were meant to be told.
                    </p>
                    <div className="flex gap-6">
                      <button className="w-16 h-16 rounded-full border border-border/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                        <Volume2 size={24} className="text-muted-light dark:text-muted-dark" />
                      </button>
                      <button className="px-12 py-5 bg-heritage-light dark:bg-heritage-dark text-white rounded-full ui-label text-xs tracking-[0.2em] shadow-xl hover:scale-105 transition-all">
                        STOP LISTENING
                      </button>
                      <button className="w-16 h-16 rounded-full border border-border/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                        <MoreVertical size={24} className="text-muted-light dark:text-muted-dark" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Bar */}
            <footer className="p-6 md:p-8 bg-background-light/30 dark:bg-background-dark/30 backdrop-blur-md border-t border-border/10">
              <div className="relative max-w-4xl mx-auto">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me about a place, a legend, or request a story..." 
                  className="w-full bg-surface-light dark:bg-surface-dark border border-border/10 rounded-full px-8 py-5 text-sm focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-all shadow-xl pr-20"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full text-muted-light dark:text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors flex items-center justify-center">
                    <Mic size={20} />
                  </button>
                  <button 
                    onClick={handleSend}
                    className="w-12 h-12 rounded-full bg-heritage-light dark:bg-heritage-dark text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
              <p className="text-center mt-4 text-[8px] ui-label opacity-30">REVERIE GUIDE IS HERE TO SHARE CULTURAL AND HISTORICAL STORIES</p>
            </footer>

          </main>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AIGuide;
