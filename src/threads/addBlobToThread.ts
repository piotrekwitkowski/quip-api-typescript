import { Post } from "../types";

export interface AddBlobToThreadRequestProps {
  threadId: string;
  blob: any;
}

export interface AddBlobToThreadResponse {
  id: string;
  url: string;
}

/** @internal */
export const addBlobToThread = (post: Post) => (props: AddBlobToThreadRequestProps) => {
  const { threadId, blob } = props;
  return post<AddBlobToThreadResponse>(`1/blob/${threadId}`, blob);
}
