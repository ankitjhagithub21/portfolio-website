import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const getAdmin = async () => {
      await api
        .get("/admin")
        .then((resData) => {
          
          setAdmin(resData.data);
        })
        .catch(() => {
          setAdmin(null);
        });
    };
    getAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAuth = () => useContext(AdminContext);
