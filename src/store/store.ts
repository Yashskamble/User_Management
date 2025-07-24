import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import { LOCAL_STORAGE_KEYS } from "../constants/storageKeys";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

store.subscribe(() => {
  const { users } = store.getState().users;
  localStorage.setItem(LOCAL_STORAGE_KEYS.USERS, JSON.stringify(users));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
