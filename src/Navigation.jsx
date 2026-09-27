import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/" className="logo">
        Study<span>Plan</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/subjects">Subjects</Link>
      </div>
    </nav>
  );
}

export default Navigation;