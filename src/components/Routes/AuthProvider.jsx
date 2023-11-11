
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
import { useEffect, useState } from "react";

const AuthProvider = () => {
    const { isLoggedIn } = useAuth();
    const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation();
console.log("token", loggedIn);
  console.log("location",location);
  useEffect(() => {
    const checkLogin = async () => {
      const check = await isLoggedIn();
      setLoggedIn(check);
    };
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthProvider;
