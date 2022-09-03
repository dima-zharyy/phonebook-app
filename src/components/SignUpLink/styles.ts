export const linkStyles = {
  fontSize: { xs: '14px', sm: '16px' },
  textDecoration: 'none',
  transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  '&:hover': {
    color: theme => theme.palette.primary.dark,
  },
};

export const boxStyles = {
  mt: 2,
  textAlign: 'center',
};
