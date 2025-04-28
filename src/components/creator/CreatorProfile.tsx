
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CreatorProfile = () => {
  return (
    <Card className="md:col-span-1">
      <CardHeader>
        <CardTitle>Profile Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-white text-4xl font-bold">
              JD
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-gray-500">Travel & Lifestyle Creator</p>
          </div>
          <div className="pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Content Category</span>
              <span className="font-medium">Travel</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Primary Platform</span>
              <span className="font-medium">Instagram</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Avg. Watch Time</span>
              <span className="font-medium">2.5 min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Post Frequency</span>
              <span className="font-medium">3x / week</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatorProfile;
