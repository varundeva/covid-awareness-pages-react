import "./navbar.css";
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <h3>Covid Awareness</h3>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/symptoms">Symptoms</Link>
          </li>
          <li>
            <Link to="/precautions">Precautions</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
