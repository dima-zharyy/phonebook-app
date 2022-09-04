import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { linkStyles, boxStyles } from "./styles";

export const SignUpLink: React.FC = () => {
  return (
    <Box sx={boxStyles}>
      <Typography
        to="/sign-up"
        component={Link}
        color="primary"
        align="center"
        sx={linkStyles}
      >
        Haven't Phonebook yet? Click to sign up
      </Typography>
    </Box>
  );
};
