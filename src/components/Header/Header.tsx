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
import { useAppSelector } from "../../app/hooks";
import { NavLink } from "react-router-dom";
import { StyledNavLink } from "./style";

const Header = () => {
  const { fullName: user } = useAppSelector((state) => state.login);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}>
            <StyledNavLink to={"/"}>Welcome</StyledNavLink>
          </Typography>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}>
            <StyledNavLink to={"/docs"}>Docs</StyledNavLink>
          </Typography>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}>
            <StyledNavLink to={"/form"}>Form</StyledNavLink>
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
