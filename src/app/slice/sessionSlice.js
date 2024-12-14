import { createSlice } from '@reduxjs/toolkit';

// Session Slice
const initialSessionState = {
  sessionID: null,
  sessionType: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialSessionState,
  reducers: {
    setSession: (state, action) => {
      const { sessionID, sessionType } = action.payload;
      state.sessionID = sessionID;
      state.sessionType = sessionType;
    },
    clearSession: (state) => {
      state.sessionID = null;
      state.sessionType = null;
    },
  },
});

// Font Size Slice
const fontSizeSlice = createSlice({
  name: 'fontSize',
  initialState: 14, // Default font size in px
  reducers: {
    increaseFontSize: (state) => Math.min(state + 2, 32), // Max size: 32px
    decreaseFontSize: (state) => Math.max(state - 2, 10), // Min size: 10px
  },
});

// Export actions
export const { setSession, clearSession } = sessionSlice.actions;
export const { decreaseFontSize, increaseFontSize } = fontSizeSlice.actions;

// Export reducers
export const sessionReducer = sessionSlice.reducer;
export const fontSizeReducer = fontSizeSlice.reducer;
