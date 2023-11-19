"use client";

import React, { createContext, useContext } from "react";
import { io } from "socket.io-client";

const WEBSOCKET_URL: any =
  process.env.NEXT_PUBLIC_API_ENDPOINT?.split("/api/v1")[0];
const socket = io(WEBSOCKET_URL, { });

const AppContext = createContext<any>("");

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return <AppContext.Provider value={socket}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
