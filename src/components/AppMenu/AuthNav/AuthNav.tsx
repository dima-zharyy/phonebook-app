import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { navLinkStyles } from './styles.js';

export const AuthNav = () => {
  return (
    <>
      <Box
        to="/sign-in"
        as={NavLink}
        sx={{ ...navLinkStyles, ml: 'auto', mr: 2 }}
      >
        Sign In
      </Box>

      <Box to="/sign-up" as={NavLink} sx={navLinkStyles}>
        Sign Up
      </Box>
    </>
  );
};
