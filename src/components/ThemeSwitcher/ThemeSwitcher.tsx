import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch } from 'react-redux';
import { changeTheme } from 'redux/theme/themeSlice';

export const ThemeSwitcher = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleClick = () => {
    const nextTheme = theme.palette.mode === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(nextTheme));
  };

  return (
    <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};
