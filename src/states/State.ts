import { atom } from "recoil";

export const State = {
  webSocket: atom<WebSocket | null>({
    key: "GlobalState.websocket",
    default: null,
  }),
  messages: atom({
    key: "GlobalState.messages",
    default: [],
  }),
}