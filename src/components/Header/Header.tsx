import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import AppModal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import MenuLogin from "./MenuLogin";
import { useAppSelector } from "../../app/hooks";
import { StyledNavLink } from "./style";

const Header = () => {
  const { user } = useAppSelector((state) => state.login);
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
