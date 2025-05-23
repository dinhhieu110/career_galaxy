import { SystemState } from "@/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
const ProtectedAuthProvider = ({ children }) => {
  const { loading, isAuthenticated } = SystemState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !loading) navigate("/auth");
  }, [loading, isAuthenticated]);

  if (loading) return <BarLoader width={"100%"} color="#36d7b7" />;
  if (isAuthenticated) return children;
};

export default ProtectedAuthProvider;
