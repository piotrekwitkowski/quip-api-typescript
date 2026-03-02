import { Thread } from ".";
import { Get } from "../types";

export interface SearchForThreadsRequestProps {
  query: string;
  count?: number;
  only_match_titles?: boolean;
}

export type SearchForThreadsResponse = Array<{ thread: Thread; user_ids: string[]; shared_folder_ids: string[] }>;

/** @internal */
export const searchForThreads = (get: Get) => (props: SearchForThreadsRequestProps) => {
  const params = new URLSearchParams();
  params.set('query', props.query);
  if (props.count !== undefined) params.set('count', String(props.count));
  if (props.only_match_titles !== undefined) params.set('only_match_titles', String(props.only_match_titles));
  return get<SearchForThreadsResponse>(`1/threads/search?${params.toString()}`);
}
