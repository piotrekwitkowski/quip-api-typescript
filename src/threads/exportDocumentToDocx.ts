import { Get } from "../types";

export interface ExportDocumentToDocxRequestProps {
  id: string;
}

export type ExportDocumentToDocxResponse = any;

/** @internal */
export const exportDocumentToDocx = (get: Get) => (props: ExportDocumentToDocxRequestProps) => {
  const { id } = props;
  return get<ExportDocumentToDocxResponse>(`2/threads/${id}/export/docx`);
}
