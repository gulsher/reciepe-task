import React from 'react';
import Home from "./components/home"
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
