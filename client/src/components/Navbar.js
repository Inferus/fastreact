
import '../App.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="nav">
      
        <Link to='/' className="navlinks">Home</Link>
        <Link to='/about' className="navlinks">About</Link>
      
    </nav>
  )}


