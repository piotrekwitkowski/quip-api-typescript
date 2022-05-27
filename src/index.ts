import axios from 'axios';

import { EditADocumentLocation, ThreadsAPI } from "./threads";
import { UsersAPI } from "./users";
import { FoldersAPI } from './folders';

export class QuipClient {
  threads: ThreadsAPI;
  users: UsersAPI;
  folders: FoldersAPI;

  constructor(accessToken: string, urlBase = 'https://platform.quip.com/') {
    const axiosConfig = { headers: { Authorization: 'Bearer ' + accessToken } };
    const get = <T>(path: string) => axios.get<T>(urlBase + path, axiosConfig).then(response => response.data);
    const post = <T>(path: string, data: any) => axios.post<T>(urlBase + path, data, axiosConfig).then(response => response.data);

    this.threads = new ThreadsAPI(get, post);
    this.users = new UsersAPI(get);
    this.folders = new FoldersAPI(get);
  }
}

// re-export enums
export { EditADocumentLocation };
