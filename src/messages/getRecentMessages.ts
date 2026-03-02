import { Get } from "../types";

export interface GetRecentMessagesRequestProps {
  threadId: string;
  count?: number;
  max_created_usec?: number;
}

export interface Message {
  id: string;
  author_id: string;
  text: string;
  created_usec: number;
  updated_usec: number;
  annotation?: {
    id: string;
    highlight_section_ids?: string[];
  };
  files?: Array<{
    name: string;
    hash: string;
  }>;
}

export interface GetRecentMessagesResponse extends Array<Message> {}

/** @internal */
export const getRecentMessages = (get: Get) => (props: GetRecentMessagesRequestProps) => {
  const { threadId, count, max_created_usec } = props;
  const params = new URLSearchParams();
  if (count !== undefined) params.set('count', String(count));
  if (max_created_usec !== undefined) params.set('max_created_usec', String(max_created_usec));
  const query = params.toString();
  return get<GetRecentMessagesResponse>(`1/messages/${threadId}${query ? '?' + query : ''}`);
};
