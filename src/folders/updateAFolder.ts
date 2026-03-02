import { Post } from "../types";
import { Folder } from "./getFolder";

export interface UpdateAFolderRequestProps {
  body: {
    folder_id: string;
    title?: string;
    color?: string;
  };
}

export interface UpdateAFolderResponse {
  folder: Folder;
  member_ids: string[];
}

/** @internal */
export const updateAFolder =
  (post: Post) => (props: UpdateAFolderRequestProps) => {
    const { body } = props;
    return post<UpdateAFolderResponse>(
      "1/folders/update",
      new URLSearchParams(body as Record<string, string>),
    );
  };
