import { Post } from "../types";

export interface EditThreadLinkShareSettingsRequestProps {
  id: string;
  body?: {
    link_sharing_enabled?: boolean;
    default_link_access?: string;
    show_edit_link?: boolean;
  }
}

export interface EditThreadLinkShareSettingsResponse {
  link_sharing_enabled: boolean;
  default_link_access: string;
  show_edit_link: boolean;
  link: string;
  quip_thread_id: string;
}

/** @internal */
export const editThreadLinkShareSettings = (post: Post) => (props: EditThreadLinkShareSettingsRequestProps) => {
  const { id, body } = props;
  return post<EditThreadLinkShareSettingsResponse>(`2/threads/${id}/link-sharing`, body);
}
