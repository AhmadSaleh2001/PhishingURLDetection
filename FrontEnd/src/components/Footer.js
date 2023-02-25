import React from "react";

function Footer() {
  const D = new Date();

  return (
    <div className="container">
      <footer className="d-flex flex-column flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-12">
          <div className="col-md-12 text-center">
            <h3>Made By : </h3>
          </div>
          <div className="col-md-12 text-center">
            <h5 className="col-md-12">
              Ahmad Saleh{" "}
              <span>
                <a
                  href="https://www.linkedin.com/in/ahmadsaleh2001/"
                  target="_blank"
                >
                  <i
                    className="fab fa-linkedin"
                    style={{ color: "#0072b1" }}
                  ></i>
                </a>
              </span>
            </h5>
            <h5 className="col-md-12">Muhannad Tomeh</h5>
            <h5 className="col-md-12">Nagham Maraheen</h5>
          </div>
          <hr />
          <div className="col-md-12 text-center  text text-danger">
            <h3>Supervisor : </h3>
          </div>
          <div className="col-md-12 text-center">
            <h5 className="col-md-12">DR.Eman Droubi</h5>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <span className="text-muted">
            © {D.getFullYear()} Goodbye Phishers, Inc
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
