import { Get } from "../types";

import {
  getFolder,
  GetFolderRequestProps,
  GetFolderResponse,
} from "./getFolder";

export class FoldersAPI {
  getFolder: (props: GetFolderRequestProps) => Promise<GetFolderResponse>;

  constructor(get: Get) {
    this.getFolder = getFolder(get);
  }
}
