
import React from 'react';
import { Container } from '@/components/common/Container';

const StatisticsBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0s" }}>
            <div className="text-4xl md:text-5xl font-bold mb-2">15K+</div>
            <div className="text-white/80">Active Creators</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl md:text-5xl font-bold mb-2">$25M</div>
            <div className="text-white/80">Creator Earnings</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl md:text-5xl font-bold mb-2">850+</div>
            <div className="text-white/80">Brand Partners</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-4xl md:text-5xl font-bold mb-2">3.2B</div>
            <div className="text-white/80">Audience Reach</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatisticsBanner;
