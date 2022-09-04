import { Drawer, Toolbar, Box, Typography } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { NavLink } from "react-router-dom";
import { drawerStyles, linkBoxStyles, linkStyles } from "./styles";

export const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" sx={drawerStyles}>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <Box to="contacts" component={NavLink} sx={linkBoxStyles}>
          <PeopleOutlineIcon />
          <Typography sx={linkStyles}>Contacts</Typography>
        </Box>
        <Box to="add-contact" component={NavLink} sx={linkBoxStyles}>
          <PersonAddAltIcon />
          <Typography sx={linkStyles}>Add contact</Typography>
        </Box>
      </Box>
    </Drawer>
  );
};
