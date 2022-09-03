import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu, AuthNav, MainNav, ThemeSwitcher } from 'components';
import { getFetchingStatus, getSignStatus } from 'redux/auth/authSlice.js';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/theme/themeSlice.js';

import { AppBar, Box, Container, GlobalStyles, Toolbar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { navStyles, appBarStyles, outletBoxStyles } from './styles.js';

export const AppMenu = () => {
  const isSignedIn = useSelector(getSignStatus);
  const isFetchingCurrentUser = useSelector(getFetchingStatus);
  const savedTheme = useSelector(getTheme);

  const theme = createTheme({
    palette: {
      mode: savedTheme,
      primary: teal,
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {!isFetchingCurrentUser && (
        <>
          <AppBar position="fixed" sx={appBarStyles}>
            <Container maxWidth="lg">
              <Toolbar disableGutters>
                <Box as="nav" sx={navStyles}>
                  <MainNav />
                  {!isSignedIn && <AuthNav />}
                </Box>
                {isSignedIn && <UserMenu />}
                <ThemeSwitcher />
              </Toolbar>
            </Container>
          </AppBar>
          <Box sx={outletBoxStyles}>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Box>

          <GlobalStyles
            styles={{
              html: {
                backgroundColor:
                  theme.palette.mode === 'dark' ? '#121212' : null,
              },
            }}
          />
        </>
      )}
    </ThemeProvider>
  );
};
