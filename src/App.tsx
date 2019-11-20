import React from 'react';
import './style/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShowCircle from './Circle';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={ShowCircle}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
