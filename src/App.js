import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { AlertTwoTone, DownloadOutlined } from "@ant-design/icons";
function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="" />
          </Link>
          <Button
            type="ghost"
            onClick={function () {
              history.push("/upload");
            }}
          >
            눌러방
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={function () {
              alert("업로드 클릭");
            }}
            icon={<DownloadOutlined />}
          >
            Primary Button
          </Button>
        </div>
      </div>

      <div id="body">
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
