import { Avatar, Box, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  menuWrapperStyles,
  avatarStyles,
  userNameStyles,
  buttonStyles,
  buttonTextStyles,
} from "./styles";
import { signOut } from "redux/auth/authOperations";
import { getUsername } from "redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { notify } from "components";
import { useAppDispatch, useAppSelector } from "redux/reduxHooks";

export const UserMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(getUsername);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await dispatch(signOut());
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      notify(`Something went wrong! Try again`, "fail");
    }
  };

  return (
    <Box sx={menuWrapperStyles}>
      <Avatar color="secondary" sx={avatarStyles}>
        {userName && userName[0].toUpperCase()}
      </Avatar>

      <Typography variant="body2" component="h2" sx={userNameStyles}>
        {`${userName}`}
      </Typography>

      <Button
        fullWidth
        disableElevation
        variant="contained"
        size="small"
        endIcon={<LogoutIcon />}
        sx={buttonStyles}
        onClick={handleSignOut}
      >
        <Typography variant="body2" sx={buttonTextStyles}>
          Sign out
        </Typography>
      </Button>
    </Box>
  );
};
