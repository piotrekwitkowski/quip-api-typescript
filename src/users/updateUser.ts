import { Post } from "../types";

export interface UpdateUserRequestProps {
  body: {
    user_id?: string;
    name?: string;
    profile_picture_url?: string;
  };
}

export interface UpdateUserResponse {
  id: string;
  name: string;
  is_robot: boolean;
  affinity: number;
  profile_picture_url?: string;
}

/** @internal */
export const updateUser = (post: Post) => (props: UpdateUserRequestProps) => {
  const data = new URLSearchParams();
  if (props.body.user_id !== undefined) {
    data.set("user_id", props.body.user_id);
  }
  if (props.body.name !== undefined) {
    data.set("name", props.body.name);
  }
  if (props.body.profile_picture_url !== undefined) {
    data.set("profile_picture_url", props.body.profile_picture_url);
  }
  return post<UpdateUserResponse>("1/users/update", data);
};
