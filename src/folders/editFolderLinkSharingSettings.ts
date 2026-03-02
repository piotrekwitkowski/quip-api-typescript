import { Put } from "../types";

export interface EditFolderLinkSharingSettingsRequestProps {
  id: string;
  body?: {
    link_sharing_enabled?: boolean;
    default_link_access?: string;
    show_edit_link?: boolean;
  };
}

export interface EditFolderLinkSharingSettingsResponse {
  link_sharing_enabled: boolean;
  default_link_access: string;
  show_edit_link: boolean;
  link: string;
  quip_folder_id: string;
}

/** @internal */
export const editFolderLinkSharingSettings =
  (put: Put) => (props: EditFolderLinkSharingSettingsRequestProps) => {
    const { id, body } = props;
    return put<EditFolderLinkSharingSettingsResponse>(
      `2/folders/${id}/link-sharing`,
      body,
    );
  };
