import { Get } from "../types";
import { Folder } from "./getFolder";

export interface GetFoldersRequestProps {
  ids: string;
}

export type GetFoldersResponse = Record<
  string,
  {
    folder: Folder;
    member_ids: string[];
    children: Array<{ thread_id?: string; folder_id?: string }>;
  }
>;

/** @internal */
export const getFolders =
  (get: Get) => (props: GetFoldersRequestProps) => {
    const { ids } = props;
    return get<GetFoldersResponse>(`2/folders?ids=${ids}`);
  };
