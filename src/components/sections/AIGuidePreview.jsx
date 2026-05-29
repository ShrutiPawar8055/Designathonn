import React from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

const AIGuidePreview = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="bg-surface-light dark:bg-surface-dark border border-border/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <p className="ui-label text-accent-light dark:text-accent-dark mb-6">CONVERSATIONAL AI</p>
              <h2 className="heading-h2 mb-8">Ask Reverie anything</h2>
              <p className="body-text mb-10 opacity-70">
                Your AI guide to history, culture and hidden stories. Converse in your own language, ask about legends, or dive deep into architectural nuances.
              </p>
              
              <div className="space-y-4">
                <p className="ui-label text-[10px] opacity-40">TRY ASKING:</p>
                <div className="flex flex-wrap gap-3">
                  {['Tell me the legend of this temple', 'Why is this place sacred?', 'What happened here in 1565?'].map((chip) => (
                    <button key={chip} className="px-4 py-2 rounded-full border border-border/10 text-xs hover:border-accent-light hover:text-accent-light transition-all">
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-heritage-light/5 dark:bg-heritage-dark/5 p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-md bg-white dark:bg-black/40 rounded-2xl shadow-xl p-6 border border-border/5">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent-light dark:bg-accent-dark flex items-center justify-center text-white">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm">REVERIE GUIDE</h4>
                    <p className="text-[10px] opacity-40">Ready to tell a story...</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-background-light dark:bg-background-dark p-4 rounded-xl rounded-tl-none ml-0 mr-12">
                    <p className="text-xs italic">"What is the significance of the elephant carvings at the base of the temple?"</p>
                  </div>
                  <div className="bg-accent-light/10 dark:bg-accent-dark/10 p-4 rounded-xl rounded-tr-none ml-12 mr-0">
                    <p className="text-xs leading-relaxed">
                      These elephants symbolize stability and the support of the cosmos. In ancient Dravidian architecture, the Gaja-pitha (elephant base) represents the earth's strength holding up the celestial dwelling...
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask about any place, story or legend..." 
                    className="w-full bg-background-light dark:bg-background-dark border border-border/10 rounded-full px-6 py-4 text-xs focus:outline-none focus:border-accent-light"
                  />
                  <button className="absolute right-2 top-2 w-10 h-10 rounded-full bg-heritage-light dark:bg-heritage-dark text-white flex items-center justify-center">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGuidePreview;
