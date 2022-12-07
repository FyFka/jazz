import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

export default function withAccess<T>(Component: React.FC<T>, isAutorized: boolean, to = "/login") {
  return (props: Exclude<T, "user">) => {
    const user = useAppSelector((state) => state.user.value);

    if ((isAutorized && !user) || (!isAutorized && user)) {
      return <Navigate to={to} />;
    } else {
      return <Component {...props} user={user} />;
    }
  };
}
