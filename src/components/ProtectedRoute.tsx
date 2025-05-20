
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const ProtectedRoute = ({ 
  children, 
  redirectTo = "/login" 
}: ProtectedRouteProps) => {
  const { toast } = useToast();
  
  // This would normally check an auth context/store
  // For now, we'll use a mock implementation
  const isAuthenticated = true; // Mock authenticated for demo purposes
  
  if (!isAuthenticated) {
    toast({
      title: "Access denied",
      description: "You need to login to access this area",
      variant: "destructive",
    });
    return <Navigate to={redirectTo} />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
