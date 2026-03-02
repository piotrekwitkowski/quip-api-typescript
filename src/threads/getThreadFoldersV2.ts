import { Get } from "../types";

export interface GetThreadFoldersV2RequestProps {
  id: string;
}

export interface GetThreadFoldersV2Response {
  folder_ids: string[];
}

/** @internal */
export const getThreadFoldersV2 = (get: Get) => (props: GetThreadFoldersV2RequestProps) => {
  const { id } = props;
  return get<GetThreadFoldersV2Response>(`2/threads/${id}/folders`);
}
