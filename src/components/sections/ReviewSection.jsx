import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Heart, Share2 } from 'lucide-react';

const ReviewSection = ({ placeName }) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: 'Arjun Mehta',
      rating: 5,
      comment: `Visiting ${placeName} with Reverie was like having a time machine. The depth of the mythology shared made me feel like I was walking through the legends myself. Truly mesmerizing.`,
      date: '2 days ago',
      likes: 24,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun'
    },
    {
      id: 2,
      user: 'Sarah Jenkins',
      rating: 5,
      comment: `As an international tourist, I always struggled with the lack of context at historical sites. Reverie's storytelling is premium, cinematic, and so easy to follow. The ambient sounds were the cherry on top.`,
      date: '1 week ago',
      likes: 18,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    }
  ]);

  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;
    
    const review = {
      id: Date.now(),
      user: 'Guest Explorer',
      rating: rating,
      comment: newReview,
      date: 'Just now',
      likes: 0,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest'
    };
    
    setReviews([review, ...reviews]);
    setNewReview('');
  };

  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <p className="ui-label text-accent-light dark:text-accent-dark mb-4 tracking-[0.2em]">VOICES OF EXPLORERS</p>
              <h2 className="heading-h2">The {placeName} Experience</h2>
            </div>
            <div className="flex items-center gap-4 bg-background-light dark:bg-background-dark p-6 rounded-3xl border border-border/10 shadow-sm">
              <div className="text-center border-r border-border/10 pr-6">
                <p className="display-h1 text-4xl mb-1">4.9</p>
                <div className="flex text-accent-light">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                </div>
              </div>
              <div className="pl-2">
                <p className="ui-label text-[10px] opacity-40">BASED ON</p>
                <p className="text-xs font-bold">1.2k Reviews</p>
              </div>
            </div>
          </div>

          {/* Add Review Form */}
          <div className="mb-20 bg-background-light dark:bg-background-dark p-8 md:p-12 rounded-[2.5rem] border border-border/10 shadow-xl">
            <h3 className="heading-h3 text-xl mb-6">How was your journey?</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <p className="ui-label text-[10px] opacity-40">YOUR RATING:</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star} 
                      type="button"
                      onClick={() => setRating(star)}
                      className={`transition-all ${rating >= star ? 'text-accent-light' : 'text-border'}`}
                    >
                      <Star size={20} fill={rating >= star ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative">
                <textarea 
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Share what made your journey mesmerizing..." 
                  className="w-full bg-surface-light dark:bg-surface-dark border border-border/10 rounded-3xl px-8 py-6 text-sm focus:outline-none focus:border-accent-light transition-all min-h-[150px] resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-10 py-4 bg-heritage-light dark:bg-heritage-dark text-white rounded-full ui-label text-xs tracking-widest shadow-lg hover:scale-105 transition-all">
                  POST REVIEW
                </button>
              </div>
            </form>
          </div>

          {/* Reviews List */}
          <div className="space-y-10">
            {reviews.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 md:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-accent-light/20">
                    <img src={review.avatar} alt={review.user} />
                  </div>
                </div>
                <div className="flex-grow pb-10 border-b border-border/10 last:border-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">{review.user}</h4>
                      <div className="flex items-center gap-3">
                        <div className="flex text-accent-light">
                          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={8} fill={i <= review.rating ? 'currentColor' : 'none'} />)}
                        </div>
                        <span className="text-[10px] ui-label opacity-30">{review.date}</span>
                      </div>
                    </div>
                    <button className="text-muted-light hover:text-accent-light transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                  <p className="body-text text-base opacity-80 leading-relaxed mb-6">
                    {review.comment}
                  </p>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-[10px] ui-label opacity-40 hover:opacity-100 hover:text-heritage-light transition-all">
                      <Heart size={14} />
                      <span>{review.likes} HELPFUL</span>
                    </button>
                    <button className="flex items-center gap-2 text-[10px] ui-label opacity-40 hover:opacity-100 hover:text-accent-light transition-all">
                      <MessageSquare size={14} />
                      <span>REPLY</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
