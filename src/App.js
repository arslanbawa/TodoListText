import logo from './logo.svg';
import './App.css';
import List from './List'
import ShowDetail from './ShowDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" >
            <List />
          </Route>
          <Router exact path="/ShowDetail">
            <ShowDetail/>
          </Router>
        </Switch>
      </Router>
  );
}

export default App;
