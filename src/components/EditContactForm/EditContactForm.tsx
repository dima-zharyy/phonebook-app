import { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import {
  titleStyles,
  formStyles,
  fieldStyles,
  buttonsBoxStyles,
} from './styles';
import { useEditContactMutation } from 'redux/contacts/contactsApi';
import { notify } from 'components';
import PropTypes from 'prop-types';

export const EditContactForm = ({ editId, editName, editNumber, onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [editContact] = useEditContactMutation();

  useEffect(() => {
    setName(editName);
    setNumber(editNumber);
  }, [editName, editNumber]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await editContact({ editId, data: { name, number } });
      notify('Contact edited successfully', 'ok');
      onClose();
    } catch (error) {
      notify(`Something went wrong! Try again`, 'fail');
      console.log(error);
    }
  };

  return (
    <>
      <Typography variant="h5" as="h2" sx={titleStyles}>
        Edit your contact
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
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
          sx={fieldStyles}
        />

        <Box sx={buttonsBoxStyles}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<EditIcon />}
            sx={{ mr: 2 }}
          >
            Confirm
          </Button>

          <Button
            color="warning"
            type="button"
            variant="contained"
            endIcon={<ClearIcon />}
            onClick={() => onClose()}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
};

EditContactForm.propTypes = {
  editId: PropTypes.string.isRequired,
  editName: PropTypes.string.isRequired,
  editNumber: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
