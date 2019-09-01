import React from 'react';
import Home from "./components/home"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from "./components/store"

function App() {
  return (
    <div >
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/store" component={Store} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
