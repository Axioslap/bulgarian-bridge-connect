import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // Redirect to new invitation-only join page
  useEffect(() => {
    navigate('/join-us', { replace: true });
  }, [navigate]);

  return null; // This will be redirected to /join-us
};

export default Register;