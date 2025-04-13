
import React from 'react';
import { Users, BarChart3, MessageSquare, CreditCard, Search, Award } from 'lucide-react';
import Card, { CardContent } from '../common/Card';

const features = [
  {
    icon: <Users className="w-10 h-10 text-brand-purple" />,
    title: 'Smart Matching',
    description: 'Our AI-powered algorithm finds the perfect influencers for your brand based on audience demographics, engagement rates, and content quality.'
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-brand-purple" />,
    title: 'Performance Analytics',
    description: 'Track campaign performance in real-time with comprehensive analytics on engagement, reach, conversions, and ROI.'
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-brand-purple" />,
    title: 'Streamlined Communication',
    description: 'Manage all your influencer conversations in one place with our built-in messaging system, proposal tracking, and contract management.'
  },
  {
    icon: <CreditCard className="w-10 h-10 text-brand-purple" />,
    title: 'Secure Payments',
    description: 'Handle payments securely with automated invoicing, milestone-based releases, and complete payment history tracking.'
  },
  {
    icon: <Search className="w-10 h-10 text-brand-purple" />,
    title: 'Advanced Search & Filters',
    description: 'Find influencers by niche, location, engagement rate, audience size, and dozens of other criteria to target your perfect audience.'
  },
  {
    icon: <Award className="w-10 h-10 text-brand-purple" />,
    title: 'Authenticity Verification',
    description: 'We verify the authenticity of all influencers on our platform, ensuring real followers and genuine engagement metrics.'
  }
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to run successful influencer marketing campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} isHoverable className="flex flex-col h-full">
              <CardContent>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
