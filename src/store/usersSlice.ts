import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  fullName: string;
  email: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      const existingUser = [...state.users];
      existingUser.push(action.payload);
      state.users = existingUser;
    },
  },
});

export const { addUser } = UsersSlice.actions;
export default UsersSlice.reducer;
