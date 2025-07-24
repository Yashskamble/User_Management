import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormData } from "../types/formTypes";

interface UsersState {
  users: FormData[];
  selectedUser: FormData | null;
}

const usersFromStorage = localStorage.getItem("users");
const initialState: UsersState = {
  users: usersFromStorage ? JSON.parse(usersFromStorage) : [],
  selectedUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<FormData>) => {
      state.users.push(action.payload);
    },
    editUser: (state, action: PayloadAction<FormData>) => {
      const index = state.users.findIndex(user => user.email === action.payload.email);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    setSelectedUser: (state, action: PayloadAction<FormData>) => {
      state.selectedUser = action.payload;
    },
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },
});

export const { addUser, editUser, setSelectedUser, clearSelectedUser } = usersSlice.actions;
export default usersSlice.reducer;
