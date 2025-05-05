
import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardContent from '@/components/DashboardContent';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16"> {/* Add padding for the fixed navbar */}
        <DashboardContent />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
