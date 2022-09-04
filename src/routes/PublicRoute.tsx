import { Navigate } from "react-router-dom";
import { getSignStatus } from "redux/auth/authSlice";
import React from "react";
import { useAppSelector } from "redux/reduxHooks";

interface IProps {
  children: React.ReactElement<any, any> | null;
  redirectPath?: string;
}

export const PublicRoute: React.FC<IProps> = ({
  children,
  redirectPath = "/phonebook/contacts",
}) => {
  const isSignedIn = useAppSelector(getSignStatus);

  return isSignedIn ? <Navigate to={redirectPath} replace /> : children;
};
