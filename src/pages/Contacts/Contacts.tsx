import { Container } from '@mui/system';
import { ContactList, Filter, Loader } from 'components';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const Contacts = () => {
  useDocumentTitle('Contacts');
  const { isFetching, isLoading } = useGetContactsQuery();

  return (
    <Container sx={{ pb: 2 }}>
      {isFetching && isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};
