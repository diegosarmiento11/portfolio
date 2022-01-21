import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import routes from "./routes/routes";
import { MainPage, MainProjects } from "./pages/index";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path={routes.mainPage} component={MainPage} />
          <Route path={routes.mainProjects} component={MainProjects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
