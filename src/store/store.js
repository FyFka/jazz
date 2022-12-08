import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import infoReducer from "./slices/info";

export const store = configureStore({
  reducer: {
    user: userReducer,
    info: infoReducer,
  },
});
