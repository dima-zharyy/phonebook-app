import { Drawer, Toolbar, Box, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { NavLink } from 'react-router-dom';
import { drawerStyles, linkBoxStyles, linkStyles } from './styles';

export const Sidebar = () => {
  return (
    <Drawer as="aside" variant="permanent" sx={drawerStyles}>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <Box to="contacts" as={NavLink} sx={linkBoxStyles}>
          <PeopleOutlineIcon />
          <Typography sx={linkStyles}>Contacts</Typography>
        </Box>
        <Box to="add-contact" as={NavLink} sx={linkBoxStyles}>
          <PersonAddAltIcon />
          <Typography sx={linkStyles}>Add contact</Typography>
        </Box>
      </Box>
    </Drawer>
  );
};
