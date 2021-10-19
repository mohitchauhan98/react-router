import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Error from "./Error";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
