import { Post } from "../types";

export interface CreateExportPdfRequestRequestProps {
  id: string;
}

export interface CreateExportPdfRequestResponse {
  id: string;
  status: string;
}

/** @internal */
export const createExportPdfRequest = (post: Post) => (props: CreateExportPdfRequestRequestProps) => {
  const { id } = props;
  return post<CreateExportPdfRequestResponse>(`2/threads/${id}/export/pdf`, {});
}
