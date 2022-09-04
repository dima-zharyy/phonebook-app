import { Navigate } from "react-router-dom";
import { getSignStatus } from "redux/auth/authSlice";
import { useAppSelector } from "redux/reduxHooks";

interface IProps {
  children: React.ReactElement<any, any> | null;
  redirectPath: string;
}

export const PrivateRoute: React.FC<IProps> = ({
  children,
  redirectPath = "/sign-in",
}) => {
  const isSignedIn = useAppSelector(getSignStatus);

  return isSignedIn ? children : <Navigate to={redirectPath} replace />;
};
