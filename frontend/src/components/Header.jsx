import { Link } from "react-router-dom";
import {useAuth} from "../context/AdminContext"
import api from "../services/api";
import toast from "react-hot-toast"

const Header = () => {
  const { admin , setAdmin} = useAuth();

  const handleLogout = async() => {
     const res = await api.post("/admin/logout");
     setAdmin(null)
     toast.success(res.data.message)
  }
  return (
    <div className="navbar mx-auto fixed top-0 z-50 w-full">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Portfolio
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/enquiries">Enquiries</Link>
          </li>
          {admin && (
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Profile
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>{admin?.email}</a>
                </li>
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
