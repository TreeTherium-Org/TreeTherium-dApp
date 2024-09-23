import AnalyticsDashboard from '@/app/shared/analytics-dashboard';
import { metaObject } from '@/config/site.config';
import ProtectedRoute from '../../auth/protectedRoute';

export const metadata = {
  ...metaObject('Analytics'),
};

export default function AnalyticsPage() {
  return (
    <>
      <ProtectedRoute allowedRoles={['ceo', 'manager']}>
        <div>Your Analytics Page</div>
      </ProtectedRoute>
      <AnalyticsDashboard />
    </>
  );
}
