
import './App.css';

import { About } from './pages/About';
import { Home } from './pages/Home';
import { Mainlayout } from './layouts/Mainlayout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
  <Mainlayout>
    <Routes>
      <Route path="/">
<Home/>
      </Route>
      <Route path="/about">
        <About>

        </About>
      </Route>
    </Routes>
  


    </Mainlayout>
    </Router>
  )}

export default App;
