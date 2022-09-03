// import { Container, Typography } from '@mui/material';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  useDocumentTitle('Home');
  const navigate = useNavigate();

  useEffect(() => {
    // toast 'Sorry, page is under construct'
    navigate('sign-in', { replace: true });
  }, [navigate]);

  return (
    <div></div>

    // <Container sx={{ width: '60%' }}>
    //   <Typography variant="h3" mb={3} sx={{ textAlign: 'center' }}>
    //     Page is under construct!
    //   </Typography>
    //   <Typography variant="h4" sx={{ textAlign: 'center' }}>
    //     Here will be a brief presentation of Phonebook functionality with
    //     screenshots
    //   </Typography>
    // </Container>
  );
};
