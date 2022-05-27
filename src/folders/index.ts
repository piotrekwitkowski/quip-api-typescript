import { Get } from "../types";

import {
  getFolder,
  GetFolderRequestProps,
  GetFolderResponse,
} from "./getFolder";

export class FoldersAPI {
  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getFolder) */
  getFolder: (props: GetFolderRequestProps) => Promise<GetFolderResponse>;

  /** @internal */
  constructor(get: Get) {
    this.getFolder = getFolder(get);
  }
}
