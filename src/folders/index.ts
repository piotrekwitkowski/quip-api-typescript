import { Get, Post, Put } from "../types";

import { getFolder, GetFolderRequestProps, GetFolderResponse } from "./getFolder";
import { addPeopleToFolder, AddPeopleToFolderRequestProps, AddPeopleToFolderResponse } from "./addPeopleToFolder";
import { getFolderLinkSharingSettings, GetFolderLinkSharingSettingsRequestProps, GetFolderLinkSharingSettingsResponse } from "./getFolderLinkSharingSettings";
import { editFolderLinkSharingSettings, EditFolderLinkSharingSettingsRequestProps, EditFolderLinkSharingSettingsResponse } from "./editFolderLinkSharingSettings";
import { getFolders, GetFoldersRequestProps, GetFoldersResponse } from "./getFolders";
import { createAFolder, CreateAFolderRequestProps, CreateAFolderResponse } from "./createAFolder";
import { removePeopleFromFolder, RemovePeopleFromFolderRequestProps, RemovePeopleFromFolderResponse } from "./removePeopleFromFolder";
import { updateAFolder, UpdateAFolderRequestProps, UpdateAFolderResponse } from "./updateAFolder";

export class FoldersAPI {
  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getFolder) */
  getFolder: (props: GetFolderRequestProps) => Promise<GetFolderResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/addFolderMembers) */
  addPeopleToFolder: (props: AddPeopleToFolderRequestProps) => Promise<AddPeopleToFolderResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getFolderLinkSharing) */
  getFolderLinkSharingSettings: (props: GetFolderLinkSharingSettingsRequestProps) => Promise<GetFolderLinkSharingSettingsResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/editFolderLinkSharing) */
  editFolderLinkSharingSettings: (props: EditFolderLinkSharingSettingsRequestProps) => Promise<EditFolderLinkSharingSettingsResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getFolders) */
  getFolders: (props: GetFoldersRequestProps) => Promise<GetFoldersResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/createFolder) */
  createAFolder: (props: CreateAFolderRequestProps) => Promise<CreateAFolderResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/removeFolderMembers) */
  removePeopleFromFolder: (props: RemovePeopleFromFolderRequestProps) => Promise<RemovePeopleFromFolderResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/updateFolder) */
  updateAFolder: (props: UpdateAFolderRequestProps) => Promise<UpdateAFolderResponse>;

  /** @internal */
  constructor(get: Get, post: Post, put: Put) {
    this.getFolder = getFolder(get);
    this.addPeopleToFolder = addPeopleToFolder(post);
    this.getFolderLinkSharingSettings = getFolderLinkSharingSettings(get);
    this.editFolderLinkSharingSettings = editFolderLinkSharingSettings(put);
    this.getFolders = getFolders(get);
    this.createAFolder = createAFolder(post);
    this.removePeopleFromFolder = removePeopleFromFolder(post);
    this.updateAFolder = updateAFolder(post);
  }
}
