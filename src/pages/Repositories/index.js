import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  FormGroup,
  FormLabel,
  FormControl,
  ModalFooter,
} from "react-bootstrap";
import {
  changeNewRepoDescription,
  changeNewRepoName,
  changeNewRepoVisibility,
  changeShowCreateModal,
  changeShowUpdateModal,
  changeUpdateRepoDescription,
  changeUpdateRepoVisibility,
  getRepositories,
  postCreateSubmit,
  updateSubmit,
} from "../../redux/actions/repositoriesActions";
import { RepositoriesItem } from "./components/RepositoriesItem";

export const Repositories = () => {
  const { activeTab } = useSelector((state) => state.globalReducer);
  const { login, apiKey, authorized } = useSelector(
    (state) => state.profileReducer
  );
  const {
    repositories,
    loading,
    newRepoName,
    newRepoDescription,
    newRepoVisibility,
    showCreateModal,
    selectedRepo,
    updateRepoDescription,
    updateRepoVisibility,
    showUpdateModal,
  } = useSelector((state) => state.repositoriesReducer);

  const dispatch = useDispatch();

  const fetchRepositories = async () => getRepositories(apiKey, dispatch);

  const handleCreateShow = () => dispatch(changeShowCreateModal(true));
  const handleCreateClose = () => dispatch(changeShowCreateModal(false));
  const handleNewRepoName = (value) => dispatch(changeNewRepoName(value));
  const handleNewRepoDescription = (value) =>
    dispatch(changeNewRepoDescription(value));
  const handleNewRepoVisibility = (value) =>
    dispatch(changeNewRepoVisibility(value));
  const handleUpdateRepoDescription = (value) =>
    dispatch(changeUpdateRepoDescription(value));
  const handleUpdateRepoVisibility = (value) =>
    dispatch(changeUpdateRepoVisibility(value));
  const handleUpdateClose = () => dispatch(changeShowUpdateModal(false));

  const handleCreateSubmit = () =>
    postCreateSubmit(
      apiKey,
      newRepoName,
      newRepoDescription,
      newRepoVisibility,
      dispatch
    );

  const handleUpdateSubmit = () =>
    updateSubmit(
      selectedRepo,
      login,
      apiKey,
      updateRepoDescription,
      updateRepoVisibility,
      repositories,
      dispatch
    );

  useEffect(() => {
    if (activeTab === "repositories") {
      fetchRepositories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  if (!authorized) {
    return (
      <Container>
        <h1 className="text-center">Пожалуйста, авторизуется во вкладке "Профиль"</h1>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Список репозиториев</h1>
      <Button
        variant="primary"
        className="mt-2 mb-3"
        onClick={handleCreateShow}
      >
        Создать репозиторий
      </Button>
      {loading && <p>Загрузка...</p>}
      <Row>
        {repositories.map((repo, index) => (
          <RepositoriesItem key={index} repo={repo} />
        ))}
      </Row>
      <Modal show={showCreateModal} onHide={handleCreateClose}>
        <ModalHeader closeButton>
          <ModalTitle>Создать Репозиторий</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="mb-3">
              <FormLabel>Название</FormLabel>
              <FormControl
                type="text"
                placeholder="Введите название"
                value={newRepoName}
                onChange={(e) => handleNewRepoName(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Описание</FormLabel>
              <FormControl
                type="text"
                placeholder="Введите описание"
                value={newRepoDescription}
                onChange={(e) => handleNewRepoDescription(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Видимость</FormLabel>
              <FormControl
                as="select"
                value={newRepoVisibility}
                onChange={(e) => handleNewRepoVisibility(e.target.value)}
              >
                <option value="public">Публичный</option>
                <option value="private">Приватный</option>
              </FormControl>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleCreateClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={handleCreateSubmit}>
            Создать
          </Button>
        </ModalFooter>
      </Modal>
      <Modal show={showUpdateModal} onHide={handleUpdateClose}>
        <ModalHeader closeButton>
          <ModalTitle>Обновить Репозиторий</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {selectedRepo && (
            <Form>
              <FormGroup className="mb-3">
                <FormLabel>Описание</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Введите описание"
                  value={updateRepoDescription}
                  onChange={(e) => handleUpdateRepoDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel>Видимость</FormLabel>
                <FormControl
                  as="select"
                  value={updateRepoVisibility}
                  onChange={(e) => handleUpdateRepoVisibility(e.target.value)}
                >
                  <option value="public">Публичный</option>
                  <option value="private">Приватный</option>
                </FormControl>
              </FormGroup>
            </Form>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleUpdateClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Сохранить
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};
