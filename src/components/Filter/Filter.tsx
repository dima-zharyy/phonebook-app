import { Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { filterBoxStyles } from './styles';
import { getFilter } from 'redux/filter/filterSlice';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  return (
    <Box sx={filterBoxStyles}>
      <TextField
        autoComplete="off"
        id="contact-search"
        label="Type to find a contact"
        type="search"
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Box>
  );
};
