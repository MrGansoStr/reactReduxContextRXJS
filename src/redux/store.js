import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";
export const PageStore =  configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default PageStore;