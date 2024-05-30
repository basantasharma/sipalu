import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {}, []);

  const login = async (email, password) => {
    try{

    }catch(e) {

    }
  };


  const logout = async () => {

  };

  const register = async (email, password, username) => {
    try{
    }catch(e) {

    }
  }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, login, logout, register}}>{children}</AuthContext.Provider>
  )
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  if(!value) {
    throw new Error("useAuth must be wrapped inside AuthContextProvider");
  
  }
  return value;
}
