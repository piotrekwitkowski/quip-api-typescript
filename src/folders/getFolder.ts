import { Get } from "../types";

export interface GetFolderRequestProps {
  id: string;
  // TODO: implement QUERY PARAMETERS
  // sort_by: string;
  // sort_order: string;
}

export interface GetFolderResponse {
  folder: Folder;
  member_ids: string[];
  children: { thread_id: string }[];
}

export interface Folder {
  title: string;
  creator_id: string;
  id: string;
  created_usec: number;
  updated_usec: number;
  // TODO: confirm possible string values (can folder_type be "shared" | "private" ? etc)
  // folder_type: "shared";
  // inherit_mode: "inherit";
  // sharing: {
  //   company_mode: "EDIT";
  //   company_id: "LbdAcAwVVIA";
  // };
}

/** @internal */
export const getFolder = (get: Get) => (props: GetFolderRequestProps) => {
  const { id } = props;
  return get<GetFolderResponse>(`1/folders/${id}`);
};
