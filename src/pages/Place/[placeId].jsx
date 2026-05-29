import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Play, Headset, MapPin, Calendar, Globe, Sparkles, Send, ArrowLeft, Clock, Bot, User } from 'lucide-react';
import { places } from '../../data/places';
import ReviewSection from '../../components/sections/ReviewSection';

const PlaceDetail = () => {
  const { placeId } = useParams();
  const place = places.find(p => p.id === placeId);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: `Welcome to ${place?.name || 'this sacred place'}. I can feel the history in the air here. What would you like to know?`
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  const getPlaceSpecificResponse = (query) => {
    const responses = [
      `Ah, yes! ${place?.name} holds so many secrets. Let me tell you about a time when...`,
      `Imagine standing here centuries ago. The air was filled with the same sense of wonder you feel now...`,
      `This is a wonderful question about ${place?.name}. Let's walk through the story together...`,
      `Listen closely. The stones here speak of ${place?.significance}. Let me share what they remember...`,
      `What a perfect thing to ask about ${place?.name}. Picture this: under the same sky, generations have asked the same question...`
    ];
    
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    const newMessage = { id: Date.now(), type: 'user', content: chatInput };
    setChatMessages([...chatMessages, newMessage]);
    setChatInput('');
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: getPlaceSpecificResponse(chatInput)
      }]);
    }, 1000);
  };

  if (!place) {
    return (
      <PageWrapper>
        <div className="container mx-auto px-6 py-40 text-center">
          <h1 className="heading-h2 mb-8">Journey Not Found</h1>
          <Link to="/spiritual" className="ui-label text-accent-light">RETURN TO EXPLORE</Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={place.img} 
          alt={place.name} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="container mx-auto px-6">
            <Link to="/spiritual" className="inline-flex items-center space-x-2 text-white/60 hover:text-white mb-8 transition-colors group">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span className="ui-label text-[10px]">BACK TO JOURNEYS</span>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="ui-label text-accent-dark mb-4 tracking-[0.3em]">{place.tagline}</p>
              <h1 className="display-h1 text-white mb-6">{place.name}</h1>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-2 text-accent-dark bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <MapPin size={14} />
                  <span className="ui-label text-[10px]">{place.state}</span>
                </div>
                <button className="flex items-center space-x-3 text-white bg-heritage-dark px-6 py-3 rounded-full hover:bg-heritage-dark/80 transition-all group">
                  <Play size={16} fill="currentColor" />
                  <span className="ui-label text-[10px]">BEGIN NARRATION</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="bg-surface-light dark:bg-surface-dark border-b border-border/10 sticky top-[72px] z-30 backdrop-blur-md">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <span className="ui-label text-[8px] opacity-40 mb-1">REGION</span>
              <span className="font-heading italic text-sm">{place.region} India</span>
            </div>
            <div className="flex flex-col">
              <span className="ui-label text-[8px] opacity-40 mb-1">BEST TIME</span>
              <span className="font-heading italic text-sm">{place.bestTime}</span>
            </div>
            <div className="flex flex-col">
              <span className="ui-label text-[8px] opacity-40 mb-1">LANGUAGE</span>
              <span className="font-heading italic text-sm">{place.language}</span>
            </div>
            <div className="flex flex-col">
              <span className="ui-label text-[8px] opacity-40 mb-1">SIGNIFICANCE</span>
              <span className="font-heading italic text-sm">{place.significance}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div className="inline-block border-b-2 border-heritage-light dark:border-heritage-dark pb-2">
                  <h2 className="ui-label text-base tracking-[0.2em]">THE SOUL OF {place.name.toUpperCase()}</h2>
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="heading-h3 text-accent-light dark:text-accent-dark italic text-xl">What happened?</h3>
                    <p className="body-text text-xl leading-relaxed opacity-90">{place.story.what}</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="heading-h3 text-accent-light dark:text-accent-dark italic text-xl">When did it happen?</h3>
                    <p className="body-text text-xl leading-relaxed opacity-90">{place.story.when}</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="heading-h3 text-accent-light dark:text-accent-dark italic text-xl">Why is it popular?</h3>
                    <p className="body-text text-xl leading-relaxed opacity-90 font-medium text-heritage-light dark:text-heritage-dark">{place.story.why}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="heading-h2">Mythology & Origin</h2>
                <p className="body-text text-xl leading-relaxed italic opacity-80 border-l-4 border-accent-light/30 pl-8">
                  "{place.story.mythology}"
                </p>
              </motion.div>

              <div className="space-y-8">
                <h2 className="heading-h2">The Living History</h2>
                <p className="body-text">
                  {place.story.history}
                </p>
                <div className="p-10 bg-surface-light dark:bg-surface-dark rounded-3xl border border-border/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-heritage-light/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                  <h4 className="ui-label text-accent-light dark:text-accent-dark mb-6 flex items-center space-x-2">
                    <Sparkles size={14} />
                    <span>CURATED LEGEND</span>
                  </h4>
                  <p className="body-text text-lg opacity-80 leading-relaxed">
                    {place.story.legends}
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-16">
                <div className="flex items-end justify-between border-b border-border/10 pb-6">
                  <h2 className="heading-h2">Sacred Timeline</h2>
                  <p className="ui-label text-[10px] opacity-40">CHRONICLES OF {place.name.toUpperCase()}</p>
                </div>
                <div className="space-y-0 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border/20">
                  {place.timeline.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-12 pb-16 last:pb-0"
                    >
                      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-background-light dark:bg-background-dark border-2 border-heritage-light dark:border-heritage-dark flex items-center justify-center z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-heritage-light dark:bg-heritage-dark" />
                      </div>
                      <span className="ui-label text-accent-light dark:text-accent-dark mb-3 block text-sm tracking-widest">{item.year}</span>
                      <h4 className="heading-h3 text-xl mb-3">{item.event}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar / AI Guide */}
            <div className="lg:col-span-1">
              <div className="sticky top-40 space-y-10">
                <div className="bg-surface-light dark:bg-surface-dark border border-border/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <div className="p-10 border-b border-border/10 bg-heritage-light/5 dark:bg-heritage-dark/5">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-accent-light dark:bg-accent-dark flex items-center justify-center text-white">
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <h3 className="ui-label tracking-widest text-xs">REVERIE GUIDE</h3>
                        <p className="text-[10px] opacity-40 uppercase tracking-tighter">Your companion for {place.name}</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-70 leading-relaxed italic">"Every stone here has a memory. What would you like to uncover today?"</p>
                  </div>
                  
                  <div className="p-10 space-y-8">
                    {/* Chat Messages */}
                    <div className="space-y-4 max-h-64 overflow-y-auto">
                      {chatMessages.map(msg => (
                        <div key={msg.id} className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'user' ? 'bg-heritage-light dark:bg-heritage-dark text-white' : 'bg-accent-light/10 text-accent-light'}`}>
                            {msg.type === 'user' ? <User size={12} /> : <Bot size={12} />}
                          </div>
                          <div className={`p-3 rounded-2xl text-xs ${msg.type === 'user' ? 'bg-heritage-light/10 dark:bg-heritage-dark/10 rounded-tr-none' : 'bg-background-light dark:bg-background-dark rounded-tl-none'}`}>
                            {msg.content}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <p className="ui-label text-[8px] opacity-40">SUGGESTED ENQUIRIES</p>
                      {[
                        `What is the best time for ${place.name === 'Varanasi' ? 'Ganga Aarti' : 'Darshan'}?`,
                        'Tell me about the architecture',
                        'Where can I find peace?'
                      ].map((q) => (
                        <button key={q} onClick={() => { setChatInput(q); handleSendChat(); }} className="w-full text-left p-4 rounded-2xl border border-border/10 text-xs hover:border-accent-light hover:bg-accent-light/5 transition-all group flex items-center justify-between">
                          <span className="opacity-70 group-hover:opacity-100">{q}</span>
                          <ArrowLeft size={14} className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <input 
                        type="text" 
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendChat()}
                        placeholder="Speak or type your question..." 
                        className="w-full bg-background-light dark:bg-background-dark border border-border/10 rounded-2xl px-6 py-5 text-xs focus:outline-none focus:border-accent-light transition-all shadow-inner"
                      />
                      <button onClick={handleSendChat} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-heritage-light dark:bg-heritage-dark text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-10 rounded-[2.5rem] border border-border/10 bg-surface-light dark:bg-surface-dark shadow-xl group cursor-pointer">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <Headset size={20} className="text-accent-light dark:text-accent-dark" />
                      <h3 className="ui-label tracking-widest text-xs">VOICE NARRATION</h3>
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-0.5 h-3 bg-accent-light/30 rounded-full group-hover:animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading italic text-lg mb-1">{place.audioGuide.title}</p>
                      <div className="flex items-center space-x-2 opacity-40">
                        <Clock size={10} />
                        <span className="text-[10px] ui-label">{place.audioGuide.duration} • {place.audioGuide.type}</span>
                      </div>
                    </div>
                    <button className="w-14 h-14 rounded-full bg-heritage-light dark:bg-heritage-dark text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <Play size={20} fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <ReviewSection placeName={place.name} />
    </PageWrapper>
  );
};

export default PlaceDetail;
