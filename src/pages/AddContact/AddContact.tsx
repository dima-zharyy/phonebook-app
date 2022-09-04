import { AddContactForm } from "components";
import { Container } from "@mui/material";
import { useDocumentTitle } from "hooks/useDocumentTitle";

export const AddContact: React.FC = () => {
  useDocumentTitle("Add contact");

  return (
    <Container sx={{ pb: 2 }}>
      <AddContactForm />
    </Container>
  );
};
