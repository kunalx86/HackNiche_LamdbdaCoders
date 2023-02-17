import axios_ from "axios";
import { axios } from "../axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
  image: null,
  login: async (creds) => {},
  signUp: async (creds) => {},
  logout: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const me = async () => {
    const token = localStorage.getItem("auth-key");
    if (token) {
      setIsLoading(true);
      axios
        .get("/me")
        .then((data) => {
          setUser(data.data);
        })
        .catch((err) => {
          setError(err.message ?? "Something went wrong");
          setUser(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    me();
  }, []);

  useEffect(() => {
    if (!isLoading && user !== null) {
      fetch(`https://api.dicebear.com/5.x/pixel-art/png?seed=${user.identity.email.split()[0]}`)
        .then(res => res.blob())
        .then(blob => setImage(blob))
    }
  }, [isLoading, user]);

  const login = async (creds) => {
    setIsLoading(true);
    axios
      .post("/auth/login", creds)
      .then((data) => {
        console.log(data.data.access_token)
        localStorage.setItem("auth-key", data.data.access_token);
        me();
      })
      .catch((err) => {
        setError(err.message ?? "Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const signUp = async (creds) => {
    setIsLoading(true);
    axios
      .post("/auth/register", creds)
      .then((data) => {
        localStorage.setItem("auth-key", data.data.access_token);
        me();
      })
      .catch((err) => {
        setError(err.message ?? "Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = () => {
    setUser(null);
  }

  const isLoggedIn = user !== null;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isLoggedIn,
        error,
        image,
        login,
        signUp,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
