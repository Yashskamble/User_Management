import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  fullName: string;
  email: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: JSON.parse(localStorage.getItem("users") || "[]"),
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);

      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
