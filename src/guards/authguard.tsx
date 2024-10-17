import { Navigate } from 'react-router-dom';
interface AuthGuardProps {
  children: JSX.Element;
  allowedRoles: string[];
}

const AuthGuard = ({ children, allowedRoles }: AuthGuardProps) => {
  const userRole = localStorage.getItem('userRole');

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default AuthGuard;

