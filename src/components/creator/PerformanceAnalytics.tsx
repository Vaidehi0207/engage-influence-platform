
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PerformanceAnalytics = () => {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle>Performance Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Engagement Metrics */}
          <div>
            <h4 className="font-medium mb-4">Engagement Breakdown</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Likes per Post</span>
                  <span className="text-sm text-gray-500">2.5K avg</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-brand-purple h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Comments per Post</span>
                  <span className="text-sm text-gray-500">180 avg</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-brand-blue h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Share Rate</span>
                  <span className="text-sm text-gray-500">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-brand-purple h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Performance */}
          <div>
            <h4 className="font-medium mb-4">Recent Content Performance</h4>
            <div className="space-y-3">
              {[
                { title: "Travel Guide: Hidden Gems in Bali", views: "12.5K", engagement: "8.2%" },
                { title: "5 Must-Try Local Dishes", views: "10.1K", engagement: "7.5%" },
                { title: "Adventure Vlog: Mountain Hiking", views: "8.7K", engagement: "6.8%" },
              ].map((content, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h5 className="font-medium text-sm">{content.title}</h5>
                    <p className="text-xs text-gray-500">Views: {content.views}</p>
                  </div>
                  <span className="text-sm text-brand-purple font-medium">{content.engagement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceAnalytics;
