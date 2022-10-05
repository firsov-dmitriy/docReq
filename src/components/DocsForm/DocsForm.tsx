import React, { useState, FC } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Stack,
  Button,
  Alert,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Form } from "../LoginForm/style";
import {
  usePostDocReqMutation,
  useUpdateOneDocReqMutation,
} from "../../app/service/docApi";
import { IConstructor, IDocReq } from "../../Types";
interface DocsFormProps {
  users: IConstructor[];
  docs: IDocReq[];
}
const DocsForm: FC<DocsFormProps> = ({ users, docs }) => {
  const [nameUser, setNameUser] = useState("");
  const [nameDoc, setNameDoc] = useState("");
  const [id, setId] = useState<number>();
  const [updateDoc] = useUpdateOneDocReqMutation();
  const [postDoc] = usePostDocReqMutation();
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setNameUser(event.target.value);
    setShowError(false);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const doc = docs.find((doc) => doc.name == nameDoc);
    if (id && doc) {
      if (!doc?.constructorsId.includes(id)) {
        updateDoc({
          name: doc.name,
          constructorsId: [...doc.constructorsId, id],
          id: doc.id,
        });
        timerShowSuccess();
      } else {
        setShowError(true);
      }
    } else if (id && !doc) {
      postDoc({ id: docs.length + 1, name: nameDoc, constructorsId: [id] });
      timerShowSuccess();
    }
  };
  const timerShowSuccess = () => {
    setShowSuccess(true);
    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
    return () => clearTimeout(timer);
  };
  const handleChangeDoc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameDoc(event.target.value.toUpperCase());
    setShowError(false);
  };
  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setId(parseInt(event.currentTarget.id));
  };
  const handleClose = () => {
    setShowError(false);
  };

  return (
    <Box
      sx={{
        m: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <Form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Пользователь</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={nameUser}
              label='Пользователь'
              onChange={handleChange}>
              {users &&
                users.map((user) => (
                  <MenuItem
                    id={"" + user.id}
                    onClick={handleClick}
                    key={user.id}
                    value={user.fullName}>
                    {user.fullName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            value={nameDoc}
            onChange={handleChangeDoc}
            label={"Наименование документа"}
          />
          <Button
            type={"submit"}
            variant={"contained"}>
            Отправить
          </Button>
        </Stack>
      </Form>
      {showError && (
        <Alert
          onClose={handleClose}
          severity={"warning"}>
          Вы уже отправляли заявку на этот документ, она уже была учтена
        </Alert>
      )}
      {showSuccess && (
        <Alert
          onClose={handleClose}
          severity={"success"}>
          Данные обновились
        </Alert>
      )}
    </Box>
  );
};

export default DocsForm;
