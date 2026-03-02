import { Get } from "../types";

export interface NewWebsocketRequestProps {}

export interface NewWebsocketResponse {
  url: string;
}

/** @internal */
export const newWebsocket = (get: Get) => (props: NewWebsocketRequestProps) => {
  return get<NewWebsocketResponse>(`1/websockets/new`);
};
