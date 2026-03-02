
import { Get, ResponseMetadata } from "../types";

export interface GetThreadInvitedMembersV2RequestProps {
  threadIdOrSecretPath: string;
}

export interface GetThreadInvitedMembersV2Response {
  members: Array<{ user_id: string; access_level: string }>;
  response_metadata: ResponseMetadata;
}

/** @internal */
export const getThreadInvitedMembersV2 = (get: Get) => (props: GetThreadInvitedMembersV2RequestProps) => {
  const { threadIdOrSecretPath } = props;
  return get<GetThreadInvitedMembersV2Response>(`2/threads/${threadIdOrSecretPath}/invited-members`);
}
