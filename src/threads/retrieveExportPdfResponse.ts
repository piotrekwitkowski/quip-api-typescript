import { Get } from "../types";

export interface RetrieveExportPdfResponseRequestProps {
  id: string;
}

export interface RetrieveExportPdfResponseResponse {
  status: string;
  download_uri?: string;
  failure_reason?: string;
}

/** @internal */
export const retrieveExportPdfResponse = (get: Get) => (props: RetrieveExportPdfResponseRequestProps) => {
  const { id } = props;
  return get<RetrieveExportPdfResponseResponse>(`2/threads/export-pdf/${id}`);
}
