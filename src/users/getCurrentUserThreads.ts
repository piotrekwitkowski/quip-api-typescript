import { Get } from "../types";

export interface GetCurrentUserThreadsRequestProps {
  count?: number;
  max_updated_usec?: number;
}

export type GetCurrentUserThreadsResponse = Array<{
  thread: {
    id: string;
    title?: string;
    updated_usec: number;
    thread_class: string;
  };
  user_ids: string[];
  shared_folder_ids: string[];
}>;

/** @internal */
export const getCurrentUserThreads =
  (get: Get) => (props: GetCurrentUserThreadsRequestProps) => {
    const params = new URLSearchParams();
    if (props.count !== undefined) {
      params.set("count", String(props.count));
    }
    if (props.max_updated_usec !== undefined) {
      params.set("max_updated_usec", String(props.max_updated_usec));
    }
    const query = params.toString();
    const path = query
      ? `1/users/current/threads?${query}`
      : "1/users/current/threads";
    return get<GetCurrentUserThreadsResponse>(path);
  };
