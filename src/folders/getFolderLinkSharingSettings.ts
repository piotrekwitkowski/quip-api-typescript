import { Get } from "../types";

export interface GetFolderLinkSharingSettingsRequestProps {
  id: string;
}

export interface GetFolderLinkSharingSettingsResponse {
  link_sharing_enabled: boolean;
  default_link_access: string;
  show_edit_link: boolean;
  link: string;
  quip_folder_id: string;
}

/** @internal */
export const getFolderLinkSharingSettings =
  (get: Get) => (props: GetFolderLinkSharingSettingsRequestProps) => {
    const { id } = props;
    return get<GetFolderLinkSharingSettingsResponse>(
      `2/folders/${id}/link-sharing`,
    );
  };
