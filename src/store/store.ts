import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import chatSlice from "./features/chat-slice";

type PersistConfig = {
  key: string;
  storage: any;
  whitelist?: string[];
};

// persist config
const persistConfig: PersistConfig = {
  key: "user",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userSlice,
  chat: chatSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState;
export const persister = persistStore(store);
