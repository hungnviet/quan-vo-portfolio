import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Project from './Project';
import Home from './Homepage';
import AccordionDemo from './Accordian';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/Homepage">
              <Home />
            </Route>
            <Route exact path="/Project">
              <Project />
            </Route>
            <Route exact path="/Experience">
              <AccordionDemo />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
