import { Get } from "../types";

export interface ExportSpreadsheetToXlsxRequestProps {
  id: string;
}

export type ExportSpreadsheetToXlsxResponse = any;

/** @internal */
export const exportSpreadsheetToXlsx = (get: Get) => (props: ExportSpreadsheetToXlsxRequestProps) => {
  const { id } = props;
  return get<ExportSpreadsheetToXlsxResponse>(`2/threads/${id}/export/xlsx`);
}
