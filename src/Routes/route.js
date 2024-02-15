// route.js
import React from "react";
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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/designers" element={<DesignersTab />} />
      <Route path="/newDesignersTab" element={<NewDesignersTab />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/direct" element={<Direct />} />
      <Route path="/request" element={<Request />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
