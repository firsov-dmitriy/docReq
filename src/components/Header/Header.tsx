import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppModal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import MenuLogin from "./MenuLogin";

const Header = () => {
  const [user, setUser] = useState(() => localStorage.getItem("user"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}>
            Doc
          </Typography>
          {!user ? (
            <AppModal textBtn='Login'>
              <LoginForm />
            </AppModal>
          ) : (
            <MenuLogin user={user} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
