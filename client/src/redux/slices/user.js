import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: null,
  userInfo: JSON.parse(localStorage.getItem("userInfo")) ?? null,
  updateSuccess: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    userLogin: (state, { payload }) => {
      state.userInfo = payload;
      state.loading = false;
      state.error = null;
    },

    userLogout: (state) => {
      state.error = null;
      state.loading = false;
      state.userInfo = null;
    },

    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    updateUserProfile: (state, { payload }) => {
      state.userInfo = payload;
      state.updateSucess = true;
      state.loading = false;
      state.error = null;
    },
    resetUpdate: (state) => {
      state.updateSuccess = false;
    },
  },
});

export const {
  setLoading,
  setError,
  userLogin,
  userLogout,
  updateUserProfile,
  resetUpdate,
} = userSlice.actions;
export default userSlice.reducer;
export const userSelector = (state) => state.user;
