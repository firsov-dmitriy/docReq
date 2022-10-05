import React, { useState } from "react";
import { useGetConstructorsQuery } from "../../app/service/constructorApi";
import { Form, LoginButton } from "./style";
import { FormControl, MenuItem, InputLabel, Button } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../app/slice/loginSlice";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const { data: users } = useGetConstructorsQuery({});
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setUser(event.target.value);
    console.log(value);
  };
  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(user));
  };
  return (
    <Form onSubmit={hanldeSubmit}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Пользователь</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={user}
          label='Пользователь'
          onChange={(event) => {
            handleChange(event);
            setUser(event.target.value);
          }}>
          {users &&
            users.map((user) => (
              <MenuItem
                key={user.id}
                value={user.fullName}>
                {user.fullName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <LoginButton
        type='submit'
        variant={"contained"}>
        Login
      </LoginButton>
    </Form>
  );
};

export default LoginForm;
