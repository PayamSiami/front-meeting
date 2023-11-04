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
  activeConversation: null,
  notification: [],
  messages: [],
};

const CONVERSATION_ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/conversation`;
const MESSAGE_ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/message`;

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

export const openCreateConversation = createAsyncThunk(
  "conversation/open_create_c",
  async (values: any, { rejectWithValue }) => {
    const { token, receiver_id } = values;
    try {
      const { data } = await axios.post(
        CONVERSATION_ENDPOINT,
        { receiver_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const getConversationMessages = createAsyncThunk(
  "conversation/messages",
  async (values: any, { rejectWithValue }) => {
    const { token, con_id } = values;
    try {
      const { data } = await axios.get(`${MESSAGE_ENDPOINT}/${con_id}`, {
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

export const sendMessage = createAsyncThunk(
  "conversation/send_message",
  async (values: any, { rejectWithValue }) => {
    const { token, message, files, con_id } = values;
    try {
      const { data } = await axios.post(
        MESSAGE_ENDPOINT,
        { message, files, con_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
      })
      .addCase(openCreateConversation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(openCreateConversation.fulfilled, (state, action) => {
        state.status = "succeed";
        state.activeConversation = action.payload;
      })
      .addCase(openCreateConversation.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getConversationMessages.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getConversationMessages.fulfilled, (state, action) => {
        state.status = "succeed";
        state.messages = action.payload;
      })
      .addCase(getConversationMessages.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(sendMessage.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(sendMessage.fulfilled, (state: any, action) => {
        state.status = "succeed";
        state.messages = [...state.messages, action.payload];
        let conversation = {
          ...action.payload.conversation,
          latesMessage: action.payload,
        };
        let newCon = [...state?.conversations].filter(
          (c) => c._id !== conversation._id
        );
        newCon?.unshift(conversation);
        state.conversation = newCon;
      })
      .addCase(sendMessage.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const getConversation = createSelector(
  (state) => state.chat,
  (chat: any) => chat.conversations
);

export const getActiveConversation = createSelector(
  (state) => state.chat,
  (chat: any) => chat.activeConversation
);

export const getMessages = createSelector(
  (state) => state.chat,
  (chat: any) => chat.messages
);

export const { setActiveConversation } = chatSlice.actions;

export default chatSlice.reducer;
