import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostDetails from "./Components/PostDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/post/:id">
          <PostDetails />
        </Route>
        <Route path="*">
          <h2 className="text-center py-5">Error 404 - Page Not Found</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
