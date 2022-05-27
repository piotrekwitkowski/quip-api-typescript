/** @internal */
export type Get = <T>(path: string) => Promise<T>;
/** @internal */
export type Post = <T>(path: string, data: any) => Promise<T>;

export interface ResponseMetadata {
  next_cursor: string;
}

export interface MembersEntity {
  user_id: string;
  access_level: string;
}
