import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/bubblePage" component={BubblePage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
