import axios, { AxiosRequestConfig } from 'axios';
import {
  AddPeopleToAThreadRequest,
  AddPeopleToAThreadResponse,
  CopyADocumentOrTemplateV2Request,
  CopyADocumentOrTemplateV2Response,
  GetMembersV2Response,
  GetThreadHtmlV2Response,
  GetUserByIdResponse,
  GetUserResponse,
} from './types';

export class Client {
  private axiosConfig: AxiosRequestConfig;
  private urlBase: string;

  constructor(accessToken: string, urlBase?: string) {
    this.axiosConfig = { headers: { Authorization: 'Bearer ' + accessToken } };
    this.urlBase = urlBase || 'https://platform.quip.com/';
  }

  private get<T>(path: string) {
    return axios.get<T>(this.urlBase + path, this.axiosConfig)
      .then(response => response.data);
  }

  private post<T, D>(path: string, data: D) {
    return axios.post<T>(this.urlBase + path, data, this.axiosConfig)
      .then(response => response.data);
  }

  addPeopleToAThread(threadId: string, memberIds: string[]) {
    const data = { 'thread_id': threadId, 'member_ids': memberIds.join(',') };
    return this.post<AddPeopleToAThreadResponse, AddPeopleToAThreadRequest>(`1/threads/add-members`, data);
  }

  copyADocumentOrTemplateV2(threadIdOrSecretPath: string, body: CopyADocumentOrTemplateV2Request) {
    return this.post<CopyADocumentOrTemplateV2Response, CopyADocumentOrTemplateV2Request>(`2/threads/${threadIdOrSecretPath}/copy`, body)
      .then(response => response.thread);
  }

  getThreadMembersV2(threadIdOrSecretPath: string) {
    return this.get<GetMembersV2Response>(`2/threads/${threadIdOrSecretPath}/members`);
  }

  getThreadHtmlV2(id: string) {
    return this.get<GetThreadHtmlV2Response>(`2/threads/${id}/html`);
  }

  getUserByEmail(email: string) {
    return this.get<GetUserResponse>(`1/users/${email}`);
  }

  getUserById(id: string) {
    return this.get<GetUserByIdResponse>(`1/users/${id}`);
  }
}
