import React, { useState } from "react";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [initial, setInitial] = useState<boolean>(true);

  setTimeout(() => {
    setInitial(false);
  }, 5000);

  setTimeout(() => {
    setLoading(false);
  }, 1400);
  return (
    <div className="App">
      {loading && <LoadingScreen />}
      <Router>
        <Header init={initial} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
