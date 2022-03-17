import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Report from './components/Report';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/report'>
            <Report />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
