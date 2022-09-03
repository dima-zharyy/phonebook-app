import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
      <CircularProgress />
    </Box>
  );
};
