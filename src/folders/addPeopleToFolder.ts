import { Post } from "../types";
import { Folder } from "./getFolder";

export interface AddPeopleToFolderRequestProps {
  body: {
    folder_id: string;
    member_ids: string;
  };
}

export interface AddPeopleToFolderResponse {
  folder: Folder;
  member_ids: string[];
}

/** @internal */
export const addPeopleToFolder =
  (post: Post) => (props: AddPeopleToFolderRequestProps) => {
    const { body } = props;
    return post<AddPeopleToFolderResponse>(
      "1/folders/add-members",
      new URLSearchParams(body),
    );
  };
