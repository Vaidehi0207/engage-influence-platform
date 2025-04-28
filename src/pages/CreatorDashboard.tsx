
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/common/Container';
import StatsOverview from '@/components/creator/StatsOverview';
import CreatorProfile from '@/components/creator/CreatorProfile';
import PerformanceAnalytics from '@/components/creator/PerformanceAnalytics';

const CreatorDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <Container className="py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Creator Dashboard</h1>
          <p className="text-gray-600">Your influence at a glance</p>
        </div>

        <StatsOverview />

        {/* Profile Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <CreatorProfile />
          <PerformanceAnalytics />
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default CreatorDashboard;
