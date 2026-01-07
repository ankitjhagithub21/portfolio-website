import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar mx-auto fixed top-0 z-50 w-full">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Portfolio
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/enquiries">Enquiries</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
