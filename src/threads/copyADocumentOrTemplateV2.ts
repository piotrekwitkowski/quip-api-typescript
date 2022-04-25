import { Post } from "../types";

export interface CopyADocumentOrTemplateV2RequestProps {
  threadIdOrSecretPath: string;
  body?: {
    title?: string;
    folder_id?: string;
    mail_merge_values?: object;
    copy_annotations?: boolean;
  }
}

export interface CopyADocumentOrTemplateV2Response {
  thread: {
    author_id: string;
    created_usec: number;
    id: string;
    is_template: boolean;
    link: string;
    owning_company_id: string;
    secret_path: string;
    title: string;
    type: string;
    updated_usec: number;
  }
}

// https://quip.com/dev/automation/documentation/current#operation/copyDocumentV2
export const copyADocumentOrTemplateV2 = (post: Post) => (props: CopyADocumentOrTemplateV2RequestProps) => {
  // REQUEST BODY SCHEMA: application/json
  const { threadIdOrSecretPath, body } = props;
  return post<CopyADocumentOrTemplateV2Response>(`2/threads/${threadIdOrSecretPath}/copy`, body)
}
