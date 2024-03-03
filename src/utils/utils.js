// apiConfig.js

import { useSelector } from "react-redux";

export const useApiToken = async () => {
  const { signInData } = useSelector((state) => ({
    ...state.auth,
  }));
  console.log(
    "wmdnscbvdjhcbdhjfvbvbrgvb",
    signInData?.Table?.token || localStorage.getItem("token")
  );
  return signInData?.Table?.token || localStorage.getItem("token");
};

export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_PROD_URL
    : process.env.REACT_APP_DEV_URL;
