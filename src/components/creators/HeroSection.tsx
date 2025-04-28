
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-dark to-brand-blue pt-32 pb-16 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover opacity-10"></div>
      <Container className="relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Turn Your Influence Into Income
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Connect with brands that value your unique voice and audience. Maximize your earning potential while staying true to your content vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-brand-orange hover:bg-opacity-70 text-white border-none" 
              size="lg"
              onClick={() => window.location.href = '/creator-campaign'}
            >
              Start a Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20" size="lg">
              See Success Stories
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 w-full h-12"></div>
    </section>
  );
};

export default HeroSection;
