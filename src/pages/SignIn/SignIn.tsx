import { Container } from "@mui/material";
import { SignInForm } from "components";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { SignUpLink } from "components/SignUpLink/SignUpLink";

export const SignIn: React.FC = () => {
  useDocumentTitle("Sign in Phonebook");

  return (
    <Container sx={{ pb: 2 }}>
      <SignInForm />
      <SignUpLink />
    </Container>
  );
};
