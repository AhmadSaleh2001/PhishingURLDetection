import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyRealContext } from "../Helpers/MyContext";
function NavItem({ Name, To }) {
  let { Path } = useContext(MyRealContext);
  return (
    <li>
      <Link
        to={To}
        className={`nav-link link-dark px-2 ${Path == To ? "Active" : ""}`}
      >
        {Name}
      </Link>
    </li>
  );
}

export default NavItem;
