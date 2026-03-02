import { Get, Post } from "../types";

import { getRecentMessages, GetRecentMessagesRequestProps, GetRecentMessagesResponse } from "./getRecentMessages";
import { addAMessage, AddAMessageRequestProps, AddAMessageResponse } from "./addAMessage";

export class MessagesAPI {
  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getRecentMessages) */
  getRecentMessages: (props: GetRecentMessagesRequestProps) => Promise<GetRecentMessagesResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/newMessage) */
  addAMessage: (props: AddAMessageRequestProps) => Promise<AddAMessageResponse>;

  /** @internal */
  constructor(get: Get, post: Post) {
    this.getRecentMessages = getRecentMessages(get);
    this.addAMessage = addAMessage(post);
  }
}
