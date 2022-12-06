import { IUser } from "./IUser";

export interface IRootStore {
  user: {
    value: IUser | null;
  };
}
