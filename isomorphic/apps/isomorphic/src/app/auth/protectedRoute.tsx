'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead
import { useAuth } from './useAuth'; // Custom hook to get current user and role

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();
  const { user } = useAuth(); // Assuming this returns the current user and their role

  React.useEffect(() => {
    if (!user || !allowedRoles.includes(user.role)) {
      router.push('/access-denied'); // Redirect to an unauthorized page if access is denied
    }
  }, [user, allowedRoles, router]);

  return <>{user && allowedRoles.includes(user.role) ? children : null}</>;
};

export default ProtectedRoute;
