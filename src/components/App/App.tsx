import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppMenu, Notification } from "components";
import {
  Home,
  SignIn,
  SignUp,
  Phonebook,
  Contacts,
  AddContact,
  NotExist,
} from "helpers/lazyImportPages";
import { PrivateRoute, PublicRoute } from "routes";
import { fetchCurrentUser } from "redux/auth/authOperations";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "redux/reduxHooks";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppMenu />}>
          <Route index element={<Home />} />

          <Route
            path="sign-in"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />

          <Route
            path="sign-up"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />

          <Route
            path="phonebook"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          >
            <Route path="contacts" element={<Contacts />} />
            <Route path="add-contact" element={<AddContact />} />
          </Route>

          <Route path="*" element={<NotExist />} />
        </Route>
      </Routes>

      <Notification />
    </>
  );
};
