import './App.css';
import { Navbar } from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Contact } from './Components/Contact';
import NoteState from './Context/notes/NoteState';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Whatwedo from './Components/FrontPage/Whatwedo';
import ParticlesBg from 'particles-bg'

function App() {

  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div>
        <Switch>
        <Route exact path="/">
            <Whatwedo />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
        </div>
        </Router>
        <ParticlesBg type="lines" bg={true} />
        </NoteState>
    </>

  );
}

export default App;
