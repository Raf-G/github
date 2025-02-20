import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ToastContainer } from "react-toastify";
import { Profile } from "./pages/Profile";

import "bootstrap/dist/css/bootstrap.min.css";
import { Repositories } from "./pages/Repositories";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Tabs defaultActiveKey="profile" id="homeMenu" className="mb-3">
          <Tab eventKey="profile" title="Профиль">
            <Profile />
          </Tab>
          <Tab eventKey="repositories" title="Репозитории">
            <Repositories />
          </Tab>
        </Tabs>
      </div>
      <ToastContainer
        closeOnClick
        autoClose={5000}
        pauseOnFocusLoss
        position="bottom-left"
      />
    </div>
  );
}

export default App;
