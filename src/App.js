import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <Link to="/create">
          <h2 className="main-header">SIGN UP</h2>
        </Link>
        <div>
          <Route exact path="/create" component={Create} />
          <Route exact path="/read" component={Read} />
          <Route exact path="/update" component={Update} />
        </div>
      </div>
    </Router>
  );
}

export default App;
