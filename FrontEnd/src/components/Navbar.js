import React, { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import MyImage from "../images/MyImage.jpg";
import "../layout/backend.css";
import { MyRealContext } from "../Helpers/MyContext";
function Navbar() {
  let Loc = useLocation();
  let { SetPath } = useContext(MyRealContext);
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
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to={"/"}
            className="fs-4 d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            Goodbye Phishers
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {Links.map((Item, Idx) => {
              return <NavItem Name={Item[0]} To={Item[1]} key={Idx} />;
            })}
          </ul>
          {/* <Link to={"/Login"} className="btn btn-primary">
            Login
          </Link> */}
          {/* <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={MyImage}
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
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
