import React, { useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import UserLoggedIn from "../images/UserLoggedIn.png";
import "../layout/backend.css";
import { MyRealContext } from "../Helpers/MyContext";
import useLogout from "../Hooks/useLogout";
function Navbar() {
  let Loc = useLocation();
  let navigate = useNavigate();
  let logout = useLogout();

  let { SetPath, User } = useContext(MyRealContext);
  useEffect(() => {
    // console.log(Loc.pathname);
    SetPath(Loc.pathname);
  }, [Loc]);

  let Links = [
    ["Home", "/"],
    ["Product", "/Product"],
    ["Tips", "/Tips"],
    ["About Us", "/AboutUs"],
  ];

  let HandleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-center">
          <Link
            to={"/"}
            className="fs-4 d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            Goodbye Phishers
          </Link>

          <ul className="nav col-12 col-md-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {Links.map((Item, Idx) => {
              return <NavItem Name={Item[0]} To={Item[1]} key={Idx} />;
            })}
          </ul>
          {!User && (
            <Link to={"/Login"} className="btn btn-primary">
              Login
            </Link>
          )}

          {User && (
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={UserLoggedIn}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <Link className="dropdown-item" to={"/TrainModel"}>
                    Train Model
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to={"/Rates"}>
                    Rates
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item text text-danger"
                    onClick={() => HandleLogout()}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
