import { Get } from "../types";

export interface ExportSlidesToPdfRequestProps {
  id: string;
}

export type ExportSlidesToPdfResponse = any;

/** @internal */
export const exportSlidesToPdf = (get: Get) => (props: ExportSlidesToPdfRequestProps) => {
  const { id } = props;
  return get<ExportSlidesToPdfResponse>(`2/threads/${id}/export/slides-pdf`);
}
