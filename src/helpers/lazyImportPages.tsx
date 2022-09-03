import { lazy } from "react";

export const AddContact = lazy(() =>
  import("../pages/AddContact/AddContact.js").then((module) => ({
    ...module,
    default: module.AddContact,
  }))
);

export const Contacts = lazy(() =>
  import("../pages/Contacts/Contacts.js").then((module) => ({
    ...module,
    default: module.Contacts,
  }))
);

export const Home = lazy(() =>
  import("../pages/Home/Home.js").then((module) => ({
    ...module,
    default: module.Home,
  }))
);

export const Phonebook = lazy(() =>
  import("../pages/Phonebook/Phonebook.js").then((module) => ({
    ...module,
    default: module.Phonebook,
  }))
);

export const SignIn = lazy(() =>
  import("../pages/SignIn/SignIn.js").then((module) => ({
    ...module,
    default: module.SignIn,
  }))
);

export const SignUp = lazy(() =>
  import("../pages/SignUp/SignUp.js").then((module) => ({
    ...module,
    default: module.SignUp,
  }))
);

export const NotExist = lazy(() =>
  import("../pages/NotExist/NotExist.js").then((module) => ({
    ...module,
    default: module.NotExist,
  }))
);
