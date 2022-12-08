const user = {
  avatar: "https://avatars.githubusercontent.com/u/76843185?v=4",
  username: "Admin",
  password: "12345678",
};

export const login = async (username, password) => {
  const response = await new Promise((resolve) => {
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
