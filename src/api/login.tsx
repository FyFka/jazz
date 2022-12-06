import { IResponse } from "../types/IResponse";
import { IUser } from "../types/IUser";

const user = {
  avatar: "https://avatars.githubusercontent.com/u/76843185?v=4",
  username: "Admin",
  password: "12345678",
};

export const login = async (username: string, password: string) => {
  const response: IResponse<IUser> = await new Promise((resolve) => {
    setTimeout(() => {
      if (username === "Admin" && password === "12345678") {
        resolve({ data: user });
      } else {
        resolve({ message: "Username or password entered incorrectly" });
      }
    }, 500);
  });

  return response;
};
