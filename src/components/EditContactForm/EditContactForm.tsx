import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import {
  titleStyles,
  formStyles,
  fieldStyles,
  buttonsBoxStyles,
} from "./styles";
import { useEditContactMutation } from "redux/contacts/contactsApi";
import { notify } from "components";

interface IProps {
  editId: string;
  editName: string;
  editNumber: string;
  onClose: () => void;
}

export const EditContactForm: React.FC<IProps> = ({
  editId,
  editName,
  editNumber,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [editContact] = useEditContactMutation();

  useEffect(() => {
    setName(editName);
    setNumber(editNumber);
  }, [editName, editNumber]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await editContact({ editId, data: { name, number } });
      notify("Contact edited successfully", "ok");
      onClose();
    } catch (error) {
      notify(`Something went wrong! Try again`, "fail");
      console.log(error);
    }
  };

  return (
    <>
      <Typography variant="h5" component="h2" sx={titleStyles}>
        Edit your contact
      </Typography>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={formStyles}
      >
        <TextField
          fullWidth
          required
          label="Name"
          type="text"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={fieldStyles}
        />
        <TextField
          fullWidth
          required
          label="Number"
          variant="outlined"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
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
