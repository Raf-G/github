import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Profile } from "./pages/Profile";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Tabs defaultActiveKey="profile" id="homeMenu" className="mb-3">
          <Tab eventKey="profile" title="Профиль">
            <Profile />
          </Tab>
          <Tab eventKey="repositories" title="Репозитории">
            Репозитории
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
