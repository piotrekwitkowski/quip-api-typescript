import { Get } from "../types";

export interface GetBlobFromThreadRequestProps {
  threadId: string;
  blobId: string;
}

export type GetBlobFromThreadResponse = any;

/** @internal */
export const getBlobFromThread = (get: Get) => (props: GetBlobFromThreadRequestProps) => {
  const { threadId, blobId } = props;
  return get<GetBlobFromThreadResponse>(`1/blob/${threadId}/${blobId}`);
}
