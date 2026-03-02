import { Post } from "../types";

export interface AddAMessageRequestProps {
  body: {
    thread_id: string;
    content: string;
    frame?: string;
    section_id?: string;
    annotation_id?: string;
    parts?: string;
    service_id?: string;
    silent?: string;
  }
}

export interface AddAMessageResponse {
  id: string;
  author_id: string;
  text: string;
  created_usec: number;
  updated_usec: number;
}

/** @internal */
export const addAMessage = (post: Post) => (props: AddAMessageRequestProps) => {
  const { body } = props;
  return post<AddAMessageResponse>(`1/messages/new`, new URLSearchParams(body));
};
