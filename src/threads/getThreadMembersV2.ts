
import { Get, MembersEntity, ResponseMetadata } from "../types";

export interface GetThreadMembersV2RequestProps {
  threadIdOrSecretPath: string;
  // TODO: implement query parameters
  // cursor?: string;
  // limit: number
}

export interface GetThreadMembersV2Response {
  members: MembersEntity[];
  response_metadata: ResponseMetadata;
}

// https://quip.com/dev/automation/documentation/current#operation/getThreadMembersV2
export const getThreadMembersV2 = (get: Get) => (props: GetThreadMembersV2RequestProps) => {
  const { threadIdOrSecretPath } = props;
  // TODO: implement query parameters
  return get<GetThreadMembersV2Response>(`2/threads/${threadIdOrSecretPath}/members`);
}