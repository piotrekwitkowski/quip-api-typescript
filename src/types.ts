export interface CopyADocumentOrTemplateV2Request {
  title?: string;
  folder_id?: string;
  mail_merge_values?: Record<string, string>;
  copy_annotations?: boolean;
}

export interface CopyADocumentOrTemplateV2Response {
  thread: CopiedThread;
}

export interface CopiedThread extends Thread {
  secret_path: string;
}

interface Thread {
  author_id: string;
  created_usec: number;
  id: string;
  is_template: boolean;
  link: string;
  owning_company_id: string;
  title: string;
  type: string;
  updated_usec: number;
}

export interface GetThreadHtmlV2Response {
  html: string;
  response_metadata: ResponseMetadata;
}

export interface GetMembersV2Response {
  members: MembersEntity[];
  response_metadata: ResponseMetadata;
}

export interface MembersEntity {
  user_id: string;
  access_level: string;
}

export interface ResponseMetadata {
  next_cursor: string;
}

export type GetUserResponse = {
  id: string;
  name: string;
  is_robot: boolean;
  affinity: number;
  profile_picture_url?: string;
}

export interface GetUserByIdResponse extends GetUserResponse {
  emails: Emails[];
}

export interface Emails {
  address: string;
  added_usec: number;
  verified_company_id: string;
  send_notifications?: boolean | null;
}

export interface AddPeopleToAThreadRequest {
  thread_id: string;
  member_ids: string;
}

export interface AddPeopleToAThreadResponse {
  thread: SharedThread;
  user_ids: string[];
  shared_folder_ids: string[];
  expanded_user_ids: string[];
  invited_user_emails: string[];
  access_levels: Record<string, { access_level: string }>;
  html: string;
}

export interface SharedThread extends Thread {
  thread_class: string;
  document_id: string;
  is_deleted: boolean;
}
