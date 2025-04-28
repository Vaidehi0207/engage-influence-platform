
import React from 'react';
import { BarChart2, TrendingUp, UserPlus } from 'lucide-react';
import ImpactCard from '@/components/brands/ImpactCard';
import { Container } from '@/components/common/Container';

const ImpactSection = () => {
  const impactData = [
    {
      title: "Higher Earnings",
      description: "Creators on Influence.io earn 40% more than on traditional platforms",
      icon: <TrendingUp className="text-brand-blue h-10 w-10" />,
      stat: "40%",
      statLabel: "More Revenue"
    },
    {
      title: "Brand Partnerships",
      description: "Access exclusive brand deals matched to your audience and content style",
      icon: <BarChart2 className="text-brand-purple h-10 w-10" />,
      stat: "3x",
      statLabel: "More Opportunities"
    },
    {
      title: "Audience Growth",
      description: "Leverage partnerships to grow your following with targeted campaigns",
      icon: <UserPlus className="text-brand-orange h-10 w-10" />,
      stat: "25%",
      statLabel: "Faster Growth"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Create More Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform helps creators find the right partnerships and maximize their influence and earnings.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <ImpactCard 
              key={index} 
              title={item.title} 
              description={item.description} 
              icon={item.icon} 
              stat={item.stat} 
              statLabel={item.statLabel}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ImpactSection;
