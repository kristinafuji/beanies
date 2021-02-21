import './App.css';
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Information } from "./Information";
import { CovidTest } from "./CovidTest";
import { CovidVaccine } from "./CovidVaccine";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Navbar className= "navBar1" variant="dark" expand="lg">
      <Navbar.Brand style={{color:"white"}} href="#home"><img alt ="" src="Covidheadline.png" width="216" height="100" className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link style={{padding:20, color:"white", textDecoration:"none"}} to="/home">Home</Link>
          <Link style={{padding:20, color:"white", textDecoration:"none"}} to="/information">Information</Link>
          <Link style={{padding:20, color:"white", textDecoration:"none"}} to="/covidtest">Covid Testing</Link>
          <Link style={{padding:20, color:"white", textDecorations:"none"}} to="/covidvaccine">Covid Vaccination</Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/information">
            <Information />
          </Route>
          <Route path="/covidtest">
            <CovidTest />
          </Route>
          <Route path="/covidvaccine">
            <CovidVaccine />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/home" />
                    )
                }}
              />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

