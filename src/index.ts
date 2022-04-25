import axios from 'axios';

import { getThreadsMethods, EditADocumentLocation } from "./threads";
import { getUsersMethods } from "./users";

export const getQuipClient = (accessToken: string, urlBase = 'https://platform.quip.com/') => {
  const axiosConfig = { headers: { Authorization: 'Bearer ' + accessToken } };
  const get = <T>(path: string) => axios.get<T>(urlBase + path, axiosConfig).then(response => response.data);
  const post = <T>(path: string, data: any) => axios.post<T>(urlBase + path, data, axiosConfig).then(response => response.data);

  return ({
    threads: getThreadsMethods(get, post),
    users: getUsersMethods(get),
  });
};

// re-export enums
export { EditADocumentLocation };
