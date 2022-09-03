import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: teal,
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: teal,
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});
