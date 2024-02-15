// App.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { getAllRole, getUserByToken } from "../src/redux/features/auth";
import AppRoutes from "./Routes/route";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const { signInData, getUserByTokenData } = useSelector((state) => ({
    ...state.auth,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRole());
  }, []);

  useEffect(() => {
    const handleTokenChange = () => {
      if (!!signInData.access_token) {
        dispatch(getUserByToken(signInData.access_token));

        localStorage.setItem("token", signInData.access_token);
        navigate("/designers");
      } else {
        const storedToken = localStorage.getItem("token");
        if (!!storedToken) {
          const decodedToken = jwtDecode(storedToken);
          const isTokenExpired = decodedToken.exp < Date.now() / 1000;
          if (!isTokenExpired) {
            dispatch(getUserByToken(storedToken));
            navigate("/designers");
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
  }, [signInData.access_token, dispatch]);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
