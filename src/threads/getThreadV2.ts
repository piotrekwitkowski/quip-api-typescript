
import { Get } from "../types";
import { Thread } from ".";

export interface GetThreadV2RequestProps {
  id: string;
}

export interface GetThreadV2Response {
  thread: Thread
}

/** @internal */
export const getThreadV2 = (get: Get) => (props: GetThreadV2RequestProps) => {
  const { id } = props;
  return get<GetThreadV2Response>(`2/threads/${id}`);
}