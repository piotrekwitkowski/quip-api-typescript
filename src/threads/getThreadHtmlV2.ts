
import { Get, ResponseMetadata } from "../types";


export interface GetThreadHtmlV2RequestProps {
  id: string;
}

export interface GetThreadHtmlV2Response {
  html: string;
  response_metadata: ResponseMetadata;
}

/** @internal */
export const getThreadHtmlV2 = (get: Get) => (props: GetThreadHtmlV2RequestProps) => {
  const { id } = props;

  return get<GetThreadHtmlV2Response>(`2/threads/${id}/html`);
}