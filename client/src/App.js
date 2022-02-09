
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
      <Route path="/" element={<Home/>}>

      </Route>
      <Route path="/about" element={<About/>}>
      
      </Route>
    </Routes>
  


    </Mainlayout>
    </Router>
  )}

export default App;
