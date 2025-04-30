
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Creator {
  id: string;
  name: string;
  profileImage: string;
  category: string;
  platform: string;
  followers: number;
  engagementRate: number;
  bio: string;
}

interface CreatorCardProps {
  creator: Creator;
  onClick: () => void;
}

const CreatorCard = ({ creator, onClick }: CreatorCardProps) => {
  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'instagram': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'youtube': return 'bg-red-500';
      case 'tiktok': return 'bg-black';
      case 'twitter': return 'bg-blue-400';
      case 'linkedin': return 'bg-blue-700';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryLabel = (category: string) => {
    const categories: Record<string, string> = {
      beauty: 'Beauty & Makeup',
      fashion: 'Fashion & Style',
      travel: 'Travel',
      food: 'Food & Cooking',
      fitness: 'Fitness & Health',
      tech: 'Technology',
      lifestyle: 'Lifestyle',
    };
    return categories[category] || category;
  };

  return (
    <Card 
      className="overflow-hidden transition-all hover:shadow-md cursor-pointer border"
      onClick={onClick}
    >
      <div className="flex p-6">
        <div className="mr-4 flex-shrink-0">
          <div className={`w-16 h-16 rounded-full ${getPlatformColor(creator.platform)} flex items-center justify-center text-white text-xl font-bold`}>
            {creator.profileImage}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-1">{creator.name}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="outline">{getCategoryLabel(creator.category)}</Badge>
            <Badge variant="secondary">
              {creator.followers >= 1000 
                ? `${(creator.followers / 1000).toFixed(1)}K` 
                : creator.followers} followers
            </Badge>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2">{creator.bio}</p>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-3 flex justify-between border-t">
        <div className="text-sm">
          <span className="text-gray-600">Platform: </span>
          <span className="font-medium capitalize">{creator.platform}</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-600">Engagement: </span>
          <span className="font-medium">{creator.engagementRate}%</span>
        </div>
      </div>
    </Card>
  );
};

export default CreatorCard;
