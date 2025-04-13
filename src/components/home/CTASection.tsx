
import React from 'react';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Influencer Marketing?
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Join thousands of brands and influencers already using Influence.io to create successful partnerships.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="accent" 
              size="lg"
              rightIcon={<ArrowRight size={20} />}
            >
              Get Started For Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
            >
              Schedule Demo
            </Button>
          </div>
          <div className="mt-6 text-sm text-white/70">
            No credit card required • Free 14-day trial
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
