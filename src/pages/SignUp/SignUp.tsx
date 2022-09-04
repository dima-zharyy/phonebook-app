import { Container } from "@mui/material";
import { SignUpForm } from "components";
import { useDocumentTitle } from "hooks/useDocumentTitle";

export const SignUp: React.FC = () => {
  useDocumentTitle("Sign up Phonebook");

  return (
    <Container sx={{ pb: 2 }}>
      <SignUpForm />
    </Container>
  );
};
