
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform">
        <div className="h-96 w-96 rounded-full bg-gradient-primary opacity-10 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform">
        <div className="h-96 w-96 rounded-full bg-brand-orange opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Smart Influencer Marketing</span>{" "}
              <span className="block mt-2">Made Simple</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Connect brands with the perfect influencers using data-driven matching. Simplify campaigns, amplify results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="primary"
                rightIcon={<ArrowRight size={20} />}
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
              >
                Book a Demo
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              No credit card required • Free 14-day trial
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Influence.io platform" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white rounded-lg shadow-lg p-4 w-36 animate-fade-in">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg font-bold">+</span>
                </div>
                <div className="ml-3">
                  <div className="text-xs text-gray-500">Engagement</div>
                  <div className="text-sm font-bold text-gray-900">+27%</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-lg shadow-lg p-4 w-40 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-brand-purple text-lg font-bold">$</span>
                </div>
                <div className="ml-3">
                  <div className="text-xs text-gray-500">ROI</div>
                  <div className="text-sm font-bold text-gray-900">+124%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
