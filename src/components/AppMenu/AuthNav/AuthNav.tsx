import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import { navLinkStyles } from "./styles";

export const AuthNav: React.FC = () => {
  return (
    <>
      <Box
        to="/sign-in"
        component={NavLink}
        sx={{ ...navLinkStyles, ml: "auto", mr: 2 }}
      >
        Sign In
      </Box>

      <Box to="/sign-up" component={NavLink} sx={navLinkStyles}>
        Sign Up
      </Box>
    </>
  );
};
