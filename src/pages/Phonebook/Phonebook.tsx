import { Outlet } from "react-router-dom";
import { Sidebar } from "components";
import { Suspense } from "react";

export const Phonebook: React.FC = () => {
  return (
    <>
      <Sidebar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
