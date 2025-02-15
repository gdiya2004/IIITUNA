import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || ""); // "user" or "provider"

  // Separate state for users and providers
  const [user, setUser] = useState(null);
  const [provider, setProvider] = useState(null);

  const [services, setServices] = useState("");

  /** 🔹 Store Token & Role in LocalStorage */
  const storeTokenInLS = (serverToken, userType) => {
    setToken(serverToken);
    setRole(userType); // Set role
    localStorage.setItem("token", serverToken);
    localStorage.setItem("role", userType);
  };

  /** 🔹 Logout & Clear Storage */
  const LogoutUser = () => {
    setToken("");
    setRole("");
    setUser(null);
    setProvider(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  /** 🔹 Check if User/Provider is Logged In */
  let isLoggedin = !!token;

  /** 🔹 Fetch User Data Based on Role */
  const authenticateUserOrProvider = async () => {
    try {
      if (!token) return;

      const url =
        role === "provider"
          ? "http://localhost:5004/api/auth/provider"
          : "http://localhost:5004/api/auth/user";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Authenticated Data:", data.userData);

        if (role === "provider") {
          setProvider(data.userData);
        } else {
          setUser(data.userData);
        }
      }
    } catch (error) {
      console.log("Error fetching authentication data", error);
    }
  };

  /** 🔹 Fetch Services */
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5004/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Services:", data.msg);
        setServices(data.msg);
      }
    } catch (err) {
      console.log("Service fetch error", err);
    }
  };

  /** 🔹 Run Authentication & Fetch Services on Role/Token Change */
  useEffect(() => {
    getServices();
    authenticateUserOrProvider();
  }, [role, token]); // Runs when role or token changes

  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        storeTokenInLS,
        LogoutUser,
        user,
        provider,
        services,
        role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
