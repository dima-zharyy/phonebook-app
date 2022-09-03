import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { navLinkStyles, logoStyles, logoBoxStyles } from './styles.js';
import { useSelector } from 'react-redux';
import { getSignStatus } from 'redux/auth/authSlice.js';

export const MainNav = () => {
  const isSignedIn = useSelector(getSignStatus);

  return (
    <>
      <Box to="/" as={NavLink} sx={logoBoxStyles}>
        <ImportContactsIcon sx={logoStyles} />
      </Box>
      <Box to="/" as={NavLink} sx={{ ...navLinkStyles, mr: 2 }}>
        Home
      </Box>
      {isSignedIn && (
        <Box to="/phonebook" as={NavLink} sx={navLinkStyles}>
          Phonebook
        </Box>
      )}
    </>
  );
};
