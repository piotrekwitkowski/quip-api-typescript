
import { Get, MembersEntity, ResponseMetadata } from "../types";

export interface GetThreadMembersV2RequestProps {
  threadIdOrSecretPath: string;
  cursor?: string;
  limit?: number;
}

export interface GetThreadMembersV2Response {
  members: MembersEntity[];
  response_metadata: ResponseMetadata;
}

/** @internal */
export const getThreadMembersV2 = (get: Get) => (props: GetThreadMembersV2RequestProps) => {
  const { threadIdOrSecretPath, cursor, limit } = props;
  const params = new URLSearchParams();
  if (cursor !== undefined) params.set('cursor', cursor);
  if (limit !== undefined) params.set('limit', String(limit));
  const query = params.toString();
  return get<GetThreadMembersV2Response>(`2/threads/${threadIdOrSecretPath}/members${query ? `?${query}` : ''}`);
}