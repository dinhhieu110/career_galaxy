import { getCurrentUser } from "@/database/apiAuth";
import useFetch from "@/hooks/useFetch";
import { createContext, useContext, useEffect } from "react";

// Fetch current user session who is logged in
const SystemContext = createContext({});

const SystemProvider = ({ children }) => {
  const {
    data: user,
    loading,
    fn: fetchCurrentUser,
  } = useFetch(getCurrentUser);

  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <SystemContext.Provider
      value={{ user, fetchCurrentUser, loading, isAuthenticated }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export const SystemState = () => {
  return useContext(SystemContext);
};

export default SystemProvider;
