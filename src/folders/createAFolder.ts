import { Post } from "../types";
import { Folder } from "./getFolder";

export interface CreateAFolderRequestProps {
  body: {
    title: string;
    parent_id?: string;
    color?: string;
    member_ids?: string;
  };
}

export interface CreateAFolderResponse {
  folder: Folder;
  member_ids: string[];
}

/** @internal */
export const createAFolder =
  (post: Post) => (props: CreateAFolderRequestProps) => {
    const { body } = props;
    return post<CreateAFolderResponse>(
      "1/folders/new",
      new URLSearchParams(body as Record<string, string>),
    );
  };
