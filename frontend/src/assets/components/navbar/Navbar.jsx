import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>ShopSphere</h1>

      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;