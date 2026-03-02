import { Thread } from ".";
import { Get } from "../types";

export interface GetRecentThreadsRequestProps {
  count?: number;
  max_updated_usec?: number;
}

export type GetRecentThreadsResponse = Array<{ thread: Thread; user_ids: string[]; shared_folder_ids: string[] }>;

/** @internal */
export const getRecentThreads = (get: Get) => (props: GetRecentThreadsRequestProps) => {
  const params = new URLSearchParams();
  if (props.count !== undefined) params.set('count', String(props.count));
  if (props.max_updated_usec !== undefined) params.set('max_updated_usec', String(props.max_updated_usec));
  const query = params.toString();
  return get<GetRecentThreadsResponse>(`1/threads/recent${query ? `?${query}` : ''}`);
}
