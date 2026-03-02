import { Get } from "../types";

export interface GetFolderRequestProps {
  id: string;
  sort_by?: string;
  sort_order?: string;
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
  color?: string;
  parent_id?: string;
  folder_type?: 'shared' | 'private';
  inherit_mode?: 'inherit' | 'reset';
  link?: string;
  sharing?: {
    company_mode?: string;
    company_id?: string;
  };
}

/** @internal */
export const getFolder = (get: Get) => (props: GetFolderRequestProps) => {
  const { id, sort_by, sort_order } = props;
  const params = new URLSearchParams();
  if (sort_by !== undefined) params.set('sort_by', sort_by);
  if (sort_order !== undefined) params.set('sort_order', sort_order);
  const query = params.toString();
  return get<GetFolderResponse>(`1/folders/${id}${query ? `?${query}` : ''}`);
};
