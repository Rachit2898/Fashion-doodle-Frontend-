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
    dispatch(getAllRole());
  }, []);

  useEffect(() => {
    let isMounted = true;
    const handleTokenChange = () => {
      if (!!signInData.access_token) {
        dispatch(getUserByToken(signInData.access_token));
        setToken(true);
        navigate("/desiners");
      } else {
        const storedToken = localStorage.getItem("token");

        if (isMounted) {
          if (!!storedToken) {
            const decodedToken = jwtDecode(storedToken);
            const isTokenExpired = decodedToken.exp < Date.now() / 1000;
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
      }
    };

    handleTokenChange();
    return () => {
      isMounted = false;
    };
  }, [signInData.access_token, dispatch]);

  return (
    <>
      {!token ? (
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
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
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
