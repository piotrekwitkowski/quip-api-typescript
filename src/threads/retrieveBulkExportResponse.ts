import { Get } from "../types";

export interface RetrieveBulkExportResponseRequestProps {
  id: string;
}

export interface RetrieveBulkExportResponseResponse {
  status: string;
  download_uri?: string;
  failure_reason?: string;
}

/** @internal */
export const retrieveBulkExportResponse = (get: Get) => (props: RetrieveBulkExportResponseRequestProps) => {
  const { id } = props;
  return get<RetrieveBulkExportResponseResponse>(`2/threads/bulk-export/${id}`);
}
