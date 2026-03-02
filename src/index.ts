import axios from 'axios';

import { EditADocumentLocation, ThreadsAPI } from "./threads";
import { UsersAPI } from "./users";
import { FoldersAPI } from './folders';
import { MessagesAPI } from './messages';
import { RealtimeAPI } from './realtime';
import { AuthAPI } from './auth';

export class QuipClient {
  threads: ThreadsAPI;
  users: UsersAPI;
  folders: FoldersAPI;
  messages: MessagesAPI;
  realtime: RealtimeAPI;
  auth: AuthAPI;

  constructor(accessToken: string, urlBase = 'https://platform.quip.com/') {
    const axiosConfig = { headers: { Authorization: 'Bearer ' + accessToken } };
    const get = <T>(path: string) => axios.get<T>(urlBase + path, axiosConfig).then(response => response.data);
    const post = <T>(path: string, data: any) => axios.post<T>(urlBase + path, data, axiosConfig).then(response => response.data);
    const put = <T>(path: string, data: any) => axios.put<T>(urlBase + path, data, axiosConfig).then(response => response.data);
    const del = <T>(path: string) => axios.delete<T>(urlBase + path, axiosConfig).then(response => response.data);

    this.threads = new ThreadsAPI(get, post);
    this.users = new UsersAPI(get, post);
    this.folders = new FoldersAPI(get, post, put);
    this.messages = new MessagesAPI(get, post);
    this.realtime = new RealtimeAPI(get);
    this.auth = new AuthAPI(get, post, urlBase);
  }
}

// re-export enums
export { EditADocumentLocation };
