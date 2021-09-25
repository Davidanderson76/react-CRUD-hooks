import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Form Test</h2>
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
