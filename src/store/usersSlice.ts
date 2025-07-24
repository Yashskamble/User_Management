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

const usersFromStorage = localStorage.getItem("users");
const initialState: UsersState = {
  users: usersFromStorage ? JSON.parse(usersFromStorage) : [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users = [...state.users, action.payload];
    },
    editUser: (state, action: PayloadAction<User>) => {
      const updatedUsers = state.users.map((user) =>
        user.email === action.payload.email ? action.payload : user
      );
      state.users = updatedUsers;
    },
  },
});

export const { addUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
