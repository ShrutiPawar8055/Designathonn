import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Sparkles, Heart } from 'lucide-react';
import { places } from '../../data/places';
import { Link } from 'react-router-dom';

const Stories = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <p className="ui-label text-accent-light dark:text-accent-dark mb-6 tracking-[0.2em]">THE MAGIC OF STORIES</p>
            <h1 className="display-h1 mb-8">Why We Remember Stories</h1>
            <p className="body-text text-xl opacity-80 max-w-3xl mx-auto">
              Facts fade, but stories stay with us forever. Discover how Reverie uses the power of narrative to make India's heritage unforgettable.
            </p>
          </motion.div>

          {/* Why Stories Work Section */}
          <div className="grid md:grid-cols-3 gap-10 mb-24">
            {[
              {
                icon: <Brain className="text-accent-light dark:text-accent-dark" size={32} />,
                title: "Stories Activate Our Brain",
                desc: "When we hear a story, multiple parts of our brain light up—making memories 22x more likely to stick compared to just facts alone."
              },
              {
                icon: <Heart className="text-heritage-light dark:text-heritage-dark" size={32} />,
                title: "Stories Build Emotion",
                desc: "We don't just remember what happened—we remember how it felt. Emotion is the glue that makes memories permanent."
              },
              {
                icon: <Sparkles className="text-accent-light dark:text-accent-dark" size={32} />,
                title: "Stories Create Connection",
                desc: "Stories link the past to the present, making ancient places feel like they're part of our own story too."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-surface-light dark:bg-surface-dark border border-border/10 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-background-light dark:bg-background-dark flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="heading-h3 text-2xl mb-4">{item.title}</h3>
                <p className="body-text text-sm opacity-70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Featured Stories */}
          <div className="mb-24">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="ui-label text-accent-light dark:text-accent-dark mb-4">FEATURED</p>
                <h2 className="heading-h2">Stories You'll Remember</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {places.map((place, i) => (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link to={`/place/${place.id}`}>
                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-8">
                      <img 
                        src={place.img} 
                        alt={place.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="ui-label text-[10px] text-accent-light dark:text-accent-dark mb-3">{place.state} • {place.category}</p>
                      <h3 className="heading-h3 text-3xl mb-4 group-hover:text-heritage-light dark:group-hover:text-heritage-dark transition-colors">{place.name}</h3>
                      <p className="body-text opacity-70 mb-6">{place.shortDesc}</p>
                      <p className="ui-label text-[10px] opacity-40">Listen in {place.audioGuide.duration}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reverie Branding at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center pt-16 border-t border-border/10"
          >
            <div className="mb-6">
              <span className="font-heading text-5xl tracking-[0.2em] font-black text-heritage-light dark:text-heritage-dark">REVERIE</span>
            </div>
            <p className="ui-label text-[12px] opacity-60 mb-4">EVERY PLACE REMEMBERS</p>
            <p className="body-text text-sm opacity-70 max-w-xl mx-auto">
              Built with passion for India's heritage. Storytelling that stays with you, long after you've left the place.
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Stories;
