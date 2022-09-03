export const navLinkStyles = {
  color: 'inherit',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  '&.active': {
    color: 'lime',
    borderBottom: '2px solid lime',
  },

  '&:hover': {
    color: 'lime',
  },
};
