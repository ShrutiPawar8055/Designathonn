import React from 'react';

const ProblemStatementStrip = () => {
  return (
    <section className="bg-heritage-light dark:bg-heritage-dark py-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="heading-h2 text-background-light dark:text-background-dark text-2xl md:text-3xl max-w-2xl">
            "No more unreliable guides. <span className="italic opacity-70">Just stories."</span>
          </h2>
          <div className="flex items-center space-x-4">
            <div className="h-px w-12 bg-background-light/30 dark:bg-background-dark/30" />
            <p className="ui-label text-background-light/60 dark:text-background-dark/60 text-[10px]">
              THE REVERIE PROMISE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementStrip;
