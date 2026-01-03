import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  const userStr = localStorage.getItem('adminUser');

  // Check if user is authenticated
  if (!token || !userStr) {
    // Redirect to login if not authenticated
    return <Navigate to="/admin/login" replace />;
  }

  // Optional: Verify token is not expired (if you implement JWT expiration)
  try {
    const user = JSON.parse(userStr);
    // You can add additional checks here, like role verification
    if (!user || !user.role) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      return <Navigate to="/admin/login" replace />;
    }
  } catch (error) {
    // If user data is corrupted, clear and redirect
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    return <Navigate to="/admin/login" replace />;
  }

  // If authenticated, render the protected component
  return <>{children}</>;
};

export default ProtectedRoute;
