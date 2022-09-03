import { Box, Modal } from '@mui/material';
import {
  EditContactForm,
  ContactListItem,
  EmptyPhonebookMsg,
} from 'components';
import { modalStyles, listStyles } from './styles';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filterSlice';
import { useHandleModal } from 'hooks/useHandleModal';

export const ContactList = () => {
  const {
    showModal,
    editName,
    editId,
    editNumber,
    handleOpenModal,
    handleCloseModal,
  } = useHandleModal();

  const { data: contacts } = useGetContactsQuery();
  const filterValue = useSelector(getFilter);

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <Box maxWidth={500} as="ul" sx={listStyles}>
        {filteredContacts?.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              id={id}
              onClick={handleOpenModal}
            />
          );
        })}
      </Box>

      {contacts?.length === 0 && <EmptyPhonebookMsg />}

      {showModal && (
        <Modal open={showModal} onClose={handleCloseModal}>
          <Box sx={modalStyles}>
            <EditContactForm
              editId={editId}
              editName={editName}
              editNumber={editNumber}
              onClose={handleCloseModal}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};
