import React, { useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
} from "react-bootstrap";

export const Profile = () => {
  const [login, setLogin] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(login, apiKey);
  };

  return (
    <div>
      <h2 className="mb-3 text-center">Профиль</h2>
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
          <FormLabel>GitHub API Key</FormLabel>
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
        <Button variant="primary" type="submit">
          Отправить
        </Button>
      </Form>
    </div>
  );
};
