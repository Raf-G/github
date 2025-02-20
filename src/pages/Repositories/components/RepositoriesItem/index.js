import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
} from "react-bootstrap";
import { API_BASE_URL } from "../../../../shared/api/api";
import {
  deleteRepo,
  updateShow,
} from "../../../../redux/actions/repositoriesActions";

export const RepositoriesItem = ({ repo }) => {
  const { login, apiKey } = useSelector((state) => state.profileReducer);
  const { repositories } = useSelector((state) => state.repositoriesReducer);

  const dispatch = useDispatch();

  const handleUpdateShow = (repo) => updateShow(repo, dispatch);
  const handleDelete = async (repoName) =>
    deleteRepo(repoName, login, apiKey, repositories, dispatch);

  const handleOpenRepo = () =>
    window.open(`${API_BASE_URL}/${login}/${repo.name}`, "_blank");

  return (
    <Col md={4} key={repo.id}>
      <Card className="mb-3">
        <CardBody>
          <CardTitle>{repo.name}</CardTitle>
          <CardText>{repo.description}</CardText>
          <CardText>Видимость: {repo.private ? "Публичный" : "Приватный"}</CardText>
          <div className="d-flex justify-content-between">
            <Button variant="info" onClick={() => handleOpenRepo()}>
              Просмотр
            </Button>
            <Button variant="warning" onClick={() => handleUpdateShow(repo)}>
              Обновить
            </Button>
            <Button variant="danger" onClick={() => handleDelete(repo.name)}>
              Удалить
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
