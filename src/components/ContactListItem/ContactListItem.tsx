import {
  Typography,
  IconButton,
  CardContent,
  CardActions,
  Paper,
} from "@mui/material";

import {
  itemStyles,
  contentBoxStyles,
  contentStyles,
  numberLinkStyles,
} from "./styles";

import { useDeleteContactMutation } from "redux/contacts/contactsApi";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  name: string;
  number: string;
  id: string;
  onClick: (id: string, name: string, number: string) => void;
}

export const ContactListItem: React.FC<IProps> = ({
  name,
  number,
  id,
  onClick,
}) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Paper component="li" elevation={2} sx={itemStyles}>
      <CardContent sx={contentBoxStyles}>
        <Typography variant="body2" sx={contentStyles}>
          {name}
        </Typography>
        <Typography
          component="a"
          href={`tel:${number}`}
          sx={numberLinkStyles}
          color="primary"
          variant="body2"
        >
          {number}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          onClick={() => onClick(id, name, number)}
          aria-label="edit"
          size="small"
        >
          <EditIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          onClick={() => deleteContact(id)}
          aria-label="delete"
          size="small"
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Paper>
  );
};
