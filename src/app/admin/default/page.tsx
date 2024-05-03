'use client';

import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
import TotalSpent from 'components/admin/default/TotalSpent';
import HistoryItem from 'components/admin/content-management/HistoryItem';

const Dashboard = () => {
  
  return (
    <div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>
        <br />
        <HistoryItem />
    </div>
  );
};

export default Dashboard;