import { Get } from "../types";

import { newWebsocket, NewWebsocketRequestProps, NewWebsocketResponse } from "./newWebsocket";

export class RealtimeAPI {
  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/newWebsocket) */
  newWebsocket: (props: NewWebsocketRequestProps) => Promise<NewWebsocketResponse>;

  /** @internal */
  constructor(get: Get) {
    this.newWebsocket = newWebsocket(get);
  }
}
