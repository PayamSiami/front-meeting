import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "",
  error: "",
  conversations: "",
  activeConversation: {},
  notification: [],
};

const CONVERSATION_ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/conversation`;

export const getConversations = createAsyncThunk(
  "conversation/getConversations",
  async (token: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(CONVERSATION_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const chatSlice = createSlice({
  name: "chat",
  reducers: {
    setActiveConversation: (state, action) => {
      state.activeConversation = action.payload;
    },
  },
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getConversations.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getConversations.fulfilled, (state, action) => {
        state.status = "succeed";
        state.conversations = action.payload;
      })
      .addCase(getConversations.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const getConversation = createSelector(
  (state) => state.chat,
  (chat: any) => chat.conversations
);

export const { setActiveConversation } = chatSlice.actions;

export default chatSlice.reducer;
