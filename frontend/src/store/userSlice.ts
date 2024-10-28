import { createSlice } from "@reduxjs/toolkit";

type User = {
  accessToken: string | null;
  details: {
    _id: string | null;
    name: string | null;
    email: string | null;
    roles: string | null;
  };
};

const initialState: User = {
  accessToken: null,
  details: {
    _id: null,
    name: null,
    email: null,
    roles: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAccessToken(state, { payload }) {
      state.accessToken = payload;
    },
    updateUserDetails(state, { payload }) {
      state.details = payload;
    },
  },
});

export const { updateUserDetails, updateAccessToken } = userSlice.actions;

export const selectUserDetails = ({ user }: any) => ({
  user: user.details,
  isAuthenticated: !!user.details.id,
});

export const selectAcessToken = ({ user }: any) => user.accessToken;

export default userSlice.reducer;
