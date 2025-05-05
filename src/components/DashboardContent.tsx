
import React from 'react';
import StatCard from './StatCard';
import ChartSection from './ChartSection';
import ActivityFeed from './ActivityFeed';
import { Users, CreditCard, ShoppingCart, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardContent = () => {
  return (
    <div className="px-4 pt-6 pb-20 lg:px-6">
      {/* Dashboard Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden sm:inline-flex">Export</Button>
          <Button>Add New</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard 
          title="Total Customers" 
          value="18,765" 
          change={12.5} 
          icon={<Users className="h-6 w-6" />} 
        />
        <StatCard 
          title="Revenue" 
          value="$42,290" 
          change={8.2} 
          icon={<CreditCard className="h-6 w-6" />} 
        />
        <StatCard 
          title="Orders" 
          value="1,245" 
          change={-3.8} 
          icon={<ShoppingCart className="h-6 w-6" />} 
        />
        <StatCard 
          title="Conversion" 
          value="3.15%" 
          change={2.1} 
          icon={<Activity className="h-6 w-6" />} 
        />
      </div>

      {/* Charts and Activity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ChartSection />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardContent;
