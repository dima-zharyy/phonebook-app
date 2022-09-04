import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSignStatus } from "redux/auth/authSlice";
import React from "react";

interface IProps {
  children: React.ReactNode;
  redirectPath?: string;
}

export const PublicRoute: React.FC<IProps> = ({
  children,
  redirectPath = "/phonebook/contacts",
}) => {
  const isSignedIn = useSelector(getSignStatus);

  return isSignedIn ? <Navigate to={redirectPath} replace /> : children;
};
