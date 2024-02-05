import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../features/user";
import authSlice from "../features/auth";
import designerSlice from "../features/designer";
import modelSlice from "../features/model";

export default configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    design: designerSlice,
    model: modelSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
