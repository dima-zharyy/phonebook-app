import { Box, TextField } from "@mui/material";
import { changeFilter } from "redux/filter/filterSlice";
import { filterBoxStyles } from "./styles";
import { getFilter } from "redux/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "redux/reduxHooks";

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector(getFilter);

  return (
    <Box sx={filterBoxStyles}>
      <TextField
        autoComplete="off"
        id="contact-search"
        label="Type to find a contact"
        type="search"
        value={filterValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </Box>
  );
};
