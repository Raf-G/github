import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
} from "react-bootstrap";
import {
  changeApiKey,
  changeLogin,
  saveUser,
} from "../../redux/actions/profileActions";
import { TooltipApiKey } from "./components/TooltipApiKey";

export const Profile = () => {
  const { login, apiKey, authorized } = useSelector(
    (state) => state.profileReducer
  );
  const dispatch = useDispatch();

  const setLogin = (value) => dispatch(changeLogin(value));
  const setApiKey = (value) => dispatch(changeApiKey(value));

  const handleSubmit = (event) => {
    event.preventDefault();
    saveUser(login, apiKey, dispatch);
  };

  return (
    <div>
      <h2 className="text-center">Профиль</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="formLogin">
          <FormLabel>Логин</FormLabel>
          <FormControl
            type="text"
            placeholder="Введите логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formApiKey">
          <FormLabel>
            GitHub API Key
            <TooltipApiKey />
          </FormLabel>
          <FormControl
            type="password"
            placeholder="Введите GitHub API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <FormText className="text-muted">
            Никому не сообщайте свой API Key!
          </FormText>
        </FormGroup>
        <div className="d-flex align-items-center">
          <Button variant="primary" type="submit">
            Сохранить
          </Button>
          <p className="mb-0 p-2">
            {authorized ? "Вы авторизованы" : "Пожалуйста, авторизуйтесь"}
          </p>
        </div>
      </Form>
    </div>
  );
};
