import { Box, Button, TextField, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { titleStyles, formStyles, fieldStyles, buttonStyles } from './styles';
import { useAddContactMutation } from 'redux/contacts/contactsApi';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { notify } from 'components';

const STORAGE_KEY_NAME = 'add-contact-name';
const STORAGE_KEY_NUMBER = 'add-contact-number';

export const AddContactForm = () => {
  const [name, number, setName, setNumber] = useLocalStorage(
    STORAGE_KEY_NAME,
    STORAGE_KEY_NUMBER,
    ''
  );
  const [addContact] = useAddContactMutation();
  const navigate = useNavigate();

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      resetForm();
      await addContact({ name, number });
      notify(`${name} added to your Phonebook`, 'ok');
    } catch (error) {
      notify(`Something went wrong! Try again`, 'fail');
      console.log(error);
    } finally {
      navigate('/phonebook/contacts', { replace: true });
    }
  };

  return (
    <>
      <Typography variant="h5" as="h2" sx={titleStyles}>
        Add new contact to your Phonebook
      </Typography>
      <Box as="form" autoComplete="off" onSubmit={handleSubmit} sx={formStyles}>
        <TextField
          fullWidth
          required
          label="Name"
          type="text"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={fieldStyles}
        />
        <TextField
          fullWidth
          required
          label="Number"
          variant="outlined"
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
          sx={fieldStyles}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<PersonAddAltIcon />}
          sx={buttonStyles}
        >
          Add contact
        </Button>
      </Box>
    </>
  );
};
