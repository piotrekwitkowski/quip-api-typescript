import { Thread } from ".";
import { Get } from "../types";

export interface GetThreadsV2RequestProps {
  ids: string;
}

export type GetThreadsV2Response = Record<string, { thread: Thread }>;

/** @internal */
export const getThreadsV2 = (get: Get) => (props: GetThreadsV2RequestProps) => {
  const { ids } = props;
  return get<GetThreadsV2Response>(`2/threads?ids=${ids}`);
}
