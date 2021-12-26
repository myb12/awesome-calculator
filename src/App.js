import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ScreenB from './Components/ScreenB/ScreenB';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/screen-b">
          <ScreenB />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
