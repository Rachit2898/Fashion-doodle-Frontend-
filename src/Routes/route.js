// route.js
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { getAllRole, getUserByToken } from "../redux/features/auth";
import { Routes, Route } from "react-router-dom";
import SignIn from "../screens/signIn";
import Login from "../screens/logIn";
import DesignersTab from "../screens/designersTab";
import NewDesignersTab from "../screens/newDesignersTab";
import Selection from "../screens/selection";
import Direct from "../screens/directMessage";
import Trending from "../screens/trending";
import Notifications from "../screens/notifications";
import Request from "../screens/request";
import Explore from "../screens/explore";
import Profile from "../screens/profile";
import Profiles from "../screens/profiles";
import ModalDashboard from "../screens/modalDashboard";
import HomePage from "../screens/homePage";
import HomePage2 from "../screens/homePage2";
import Terms from "../screens/terms";
import Privacy from "../screens/privacy";
import About from "../screens/about";

const AppRoutes = () => {
  const navigate = useNavigate();
  const { signInData, getUserByTokenData } = useSelector((state) => ({
    ...state.auth,
  }));

  const [token, setToken] = useState(false);
  const { message } = useSelector((state) => ({
    ...state.user,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllRole(signInData?.Table?.token || localStorage.getItem("token"))
    );
  }, []);
  const storedToken = localStorage.getItem("token");
  console.log("Token changed", !storedToken);

  console.log("hello", signInData?.Table?.token);

  useEffect(() => {
    let isMounted = true;
    const handleTokenChange = () => {
      if (!!signInData?.Table?.token) {
        dispatch(
          getUserByToken(
            signInData?.Table?.token || localStorage.getItem("token")
          )
        );
        setToken(true);
        navigate("/desiners");
      } else {
        if (!!storedToken) {
          console.log({ storedToken });
          const decodedToken = jwtDecode(storedToken);
          console.log({ decodedToken });
          const isTokenExpired = decodedToken.exp < Date.now() / 1000;
          console.log("Token expired", isTokenExpired);
          if (!isTokenExpired) {
            dispatch(getUserByToken(storedToken));
            setToken(true);
          } else {
            localStorage.removeItem("token");
            navigate("/");
          }
        } else {
          navigate("/");
        }
      }
    };

    handleTokenChange();
    return () => {
      isMounted = false;
    };
  }, [signInData?.Table?.token, dispatch]);

  return (
    <>
      {!token ? (
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/getStarted" element={<HomePage2 />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<DesignersTab />} />
          <Route path="/designers" element={<DesignersTab />} />
          <Route path="/newDesignersTab" element={<NewDesignersTab />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/direct" element={<Direct />} />
          <Route path="/request" element={<Request />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/modal" element={<ModalDashboard />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
