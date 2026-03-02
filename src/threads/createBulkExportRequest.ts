import { Post } from "../types";

export interface CreateBulkExportRequestRequestProps {
  body: {
    thread_ids: string[];
  }
}

export interface CreateBulkExportRequestResponse {
  id: string;
  status: string;
}

/** @internal */
export const createBulkExportRequest = (post: Post) => (props: CreateBulkExportRequestRequestProps) => {
  const { body } = props;
  return post<CreateBulkExportRequestResponse>(`2/threads/bulk-export`, body);
}
