import WebsiteMetrics from '@/app/shared/analytics-dashboard/website-metrics/table-widget';
import AccountRetention from '@/app/shared/analytics-dashboard/account-retention';
import Acquisition from '@/app/shared/analytics-dashboard/acquisition';
import ConversionRates from '@/app/shared/analytics-dashboard/conversion-rates';
import DeviceSessions from '@/app/shared/analytics-dashboard/device-sessions';
import GoalAccomplished from '@/app/shared/analytics-dashboard/goal-accomplished';
import StatCards from '@/app/shared/analytics-dashboard/stat-cards';
import TopTrafficSource from '@/app/shared/analytics-dashboard/top-traffic-source';
import PageMetrics from '@/app/shared/analytics-dashboard/page-metric/table-widget';
import TreePlantingParticipation from '@/app/shared/analytics-dashboard/tree-planting-participation';
import TotalTreePlanted from '@/app/shared/analytics-dashboard/total-tree-planted';
import GeographicalDistribution from '@/app/shared/analytics-dashboard/geographical-distribution';
import StatCards2 from '@/app/shared/analytics-dashboard/stat-cards2';
import UserMetrics from '@/app/shared/analytics-dashboard/user-metrics';

export default function AnalyticsDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
        <StatCards2 className="grid-cols-1 @xl:grid-cols-2 @4xl:col-span-2 @6xl:grid-cols-4 @7xl:col-span-12" />

        <GeographicalDistribution />

        <TreePlantingParticipation className="@7xl:col-span-4" />

        <TotalTreePlanted className="@4xl:col-span-2 @7xl:col-span-12" />

      </div>
    </div>
  );
}
