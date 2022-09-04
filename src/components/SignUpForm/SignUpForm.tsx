import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { titleStyles, formStyles, fieldStyles, buttonStyles } from "./styles";
import { signUp } from "redux/auth/authOperations";
import { useAppDispatch } from "redux/reduxHooks";

export const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(signUp({ name, email, password }));
    } catch (error) {
      console.log(error);
    }

    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <>
      <Typography variant="h5" component="h2" sx={titleStyles}>
        Get access to the Phonebook
      </Typography>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={formStyles}
      >
        <TextField
          fullWidth
          required
          label="Login"
          type="text"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={fieldStyles}
        />
        <TextField
          fullWidth
          required
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={fieldStyles}
        />
        <TextField
          fullWidth
          required
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={fieldStyles}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={buttonStyles}
        >
          Sign up
        </Button>
      </Box>
    </>
  );
};
