import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function withAccess(Component, isAutorized, to = "/login") {
  return (props) => {
    const user = useSelector((state) => state.user.value);

    if ((isAutorized && !user) || (!isAutorized && user)) {
      return <Navigate to={to} />;
    } else {
      return <Component {...props} user={user} />;
    }
  };
}
