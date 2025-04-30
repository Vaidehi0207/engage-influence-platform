
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/common/Container';
import StatsOverview from '@/components/creator/StatsOverview';
import CreatorProfile from '@/components/creator/CreatorProfile';
import PerformanceAnalytics from '@/components/creator/PerformanceAnalytics';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample creator data - in a real app, this would come from a database
const creatorsSampleData = [
  {
    id: '1',
    name: 'John Doe',
    profileImage: 'JD',
    category: 'Travel',
    platform: 'Instagram',
    followers: 25000,
    engagementRate: 3.2,
    bio: 'Travel & Lifestyle Creator showcasing hidden gems around the world',
    watchTime: '2.5 min',
    postFrequency: '3x / week'
  },
  {
    id: '2',
    name: 'Sarah Kim',
    profileImage: 'SK',
    category: 'Beauty',
    platform: 'YouTube',
    followers: 78000,
    engagementRate: 4.5,
    bio: 'Beauty expert sharing makeup tutorials and skincare reviews',
    watchTime: '4.2 min',
    postFrequency: '2x / week'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    profileImage: 'MJ',
    category: 'Fitness',
    platform: 'TikTok',
    followers: 120000,
    engagementRate: 5.8,
    bio: 'Fitness coach helping you reach your health goals',
    watchTime: '1.8 min',
    postFrequency: 'Daily'
  },
  {
    id: '4',
    name: 'Emma Wilson',
    profileImage: 'EW',
    category: 'Food',
    platform: 'Instagram',
    followers: 45000,
    engagementRate: 4.1,
    bio: 'Food blogger sharing easy and delicious recipes',
    watchTime: '3.1 min',
    postFrequency: '2x / week'
  },
  {
    id: '5',
    name: 'Alex Chen',
    profileImage: 'AC',
    category: 'Technology',
    platform: 'YouTube',
    followers: 92000,
    engagementRate: 3.7,
    bio: 'Tech reviewer bringing you the latest gadget reviews',
    watchTime: '5.4 min',
    postFrequency: 'Weekly'
  },
  {
    id: '6',
    name: 'Priya Sharma',
    profileImage: 'PS',
    category: 'Fashion',
    platform: 'Instagram',
    followers: 67000,
    engagementRate: 5.2,
    bio: 'Fashion enthusiast showcasing latest trends and style tips',
    watchTime: '2.7 min',
    postFrequency: '3x / week'
  }
];

const CreatorDashboard = () => {
  const [searchParams] = useSearchParams();
  const creatorId = searchParams.get('id') || '';
  const { toast } = useToast();
  
  // Default to first creator if no ID is provided or use logged in creator's data
  const [creator, setCreator] = useState(creatorsSampleData[0]);
  const [isBrandView, setIsBrandView] = useState(false);

  useEffect(() => {
    if (creatorId) {
      const foundCreator = creatorsSampleData.find(c => c.id === creatorId);
      if (foundCreator) {
        setCreator(foundCreator);
        setIsBrandView(true);
      }
    }
  }, [creatorId]);
  
  const handleContactCreator = () => {
    toast({
      title: "Message Sent",
      description: `Your contact request has been sent to ${creator.name}. They will respond shortly.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <Container className="py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 gradient-text">Creator Dashboard</h1>
            <p className="text-gray-600">
              {isBrandView 
                ? `Viewing ${creator.name}'s profile and analytics` 
                : 'Your influence at a glance'}
            </p>
          </div>
          
          {isBrandView && (
            <Button 
              className="flex items-center gap-2" 
              onClick={handleContactCreator}
            >
              <MessageCircle size={16} />
              Contact Creator
            </Button>
          )}
        </div>

        <StatsOverview />

        {/* Profile Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <CreatorProfile creator={creator} />
          <PerformanceAnalytics />
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default CreatorDashboard;
