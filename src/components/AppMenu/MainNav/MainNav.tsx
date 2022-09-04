import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { navLinkStyles, logoStyles, logoBoxStyles } from "./styles";
import { getSignStatus } from "redux/auth/authSlice";
import { useAppSelector } from "redux/reduxHooks";

export const MainNav: React.FC = () => {
  const isSignedIn = useAppSelector(getSignStatus);

  return (
    <>
      <Box to="/" component={NavLink} sx={logoBoxStyles}>
        <ImportContactsIcon sx={logoStyles} />
      </Box>
      <Box to="/" component={NavLink} sx={{ ...navLinkStyles, mr: 2 }}>
        Home
      </Box>
      {isSignedIn && (
        <Box to="/phonebook" component={NavLink} sx={navLinkStyles}>
          Phonebook
        </Box>
      )}
    </>
  );
};
