import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ScreenB from './Components/ScreenB/ScreenB';
import ResultProvider from "./context/ResultProvider";

function App() {
  return (
    <ResultProvider>
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
    </ResultProvider>
  );
}

export default App;
