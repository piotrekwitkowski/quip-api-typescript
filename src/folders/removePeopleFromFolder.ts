import { Post } from "../types";

export interface RemovePeopleFromFolderRequestProps {
  body: {
    folder_id: string;
    member_ids: string;
  };
}

export type RemovePeopleFromFolderResponse = Record<string, never>;

/** @internal */
export const removePeopleFromFolder =
  (post: Post) => (props: RemovePeopleFromFolderRequestProps) => {
    const { body } = props;
    return post<RemovePeopleFromFolderResponse>(
      "1/folders/remove-members",
      new URLSearchParams(body),
    );
  };
