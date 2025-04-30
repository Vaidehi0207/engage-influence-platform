
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Creator {
  id?: string;
  name: string;
  profileImage: string;
  category: string;
  platform: string;
  followers?: number;
  engagementRate?: number;
  bio?: string;
  watchTime?: string;
  postFrequency?: string;
}

interface CreatorProfileProps {
  creator?: Creator;
}

const CreatorProfile = ({ creator = {
  name: "John Doe",
  profileImage: "JD",
  category: "Travel",
  platform: "Instagram",
  watchTime: "2.5 min",
  postFrequency: "3x / week"
} }: CreatorProfileProps) => {
  return (
    <Card className="md:col-span-1">
      <CardHeader>
        <CardTitle>Profile Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-white text-4xl font-bold">
              {creator.profileImage}
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">{creator.name}</h3>
            <p className="text-gray-500">{creator.category} Creator</p>
            {creator.bio && (
              <p className="text-sm text-gray-600 mt-2">{creator.bio}</p>
            )}
          </div>
          <div className="pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Content Category</span>
              <span className="font-medium">{creator.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Primary Platform</span>
              <span className="font-medium">{creator.platform}</span>
            </div>
            {creator.followers && (
              <div className="flex justify-between">
                <span className="text-gray-500">Followers</span>
                <span className="font-medium">
                  {creator.followers >= 1000 
                    ? `${(creator.followers / 1000).toFixed(1)}K` 
                    : creator.followers}
                </span>
              </div>
            )}
            {creator.engagementRate && (
              <div className="flex justify-between">
                <span className="text-gray-500">Engagement Rate</span>
                <span className="font-medium">{creator.engagementRate}%</span>
              </div>
            )}
            {creator.watchTime && (
              <div className="flex justify-between">
                <span className="text-gray-500">Avg. Watch Time</span>
                <span className="font-medium">{creator.watchTime}</span>
              </div>
            )}
            {creator.postFrequency && (
              <div className="flex justify-between">
                <span className="text-gray-500">Post Frequency</span>
                <span className="font-medium">{creator.postFrequency}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatorProfile;
