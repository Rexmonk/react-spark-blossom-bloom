
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Calendar, MessageCircle, FileText } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'completion',
    title: 'Project X completed',
    time: '35 min ago',
    icon: <Check className="h-4 w-4" />,
    iconBackground: 'bg-green-500',
  },
  {
    id: 2,
    type: 'meeting',
    title: 'Meeting with Client',
    time: '2 hours ago',
    icon: <Calendar className="h-4 w-4" />,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    type: 'message',
    title: 'New comment received',
    time: '5 hours ago',
    icon: <MessageCircle className="h-4 w-4" />,
    iconBackground: 'bg-purple-500',
  },
  {
    id: 4,
    type: 'document',
    title: 'Documents uploaded',
    time: '1 day ago',
    icon: <FileText className="h-4 w-4" />,
    iconBackground: 'bg-yellow-500',
  },
  {
    id: 5,
    type: 'message',
    title: 'New feedback received',
    time: '2 days ago',
    icon: <MessageCircle className="h-4 w-4" />,
    iconBackground: 'bg-purple-500',
  },
];

const ActivityFeed = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates from your dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className={`${activity.iconBackground} p-2 rounded-full text-white mr-3`}>
                {activity.icon}
              </div>
              <div>
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
          
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium w-full text-center pt-2 pb-1">
            View all activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
