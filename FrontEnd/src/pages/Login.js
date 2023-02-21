import React from "react";
import Swal from "sweetalert2";
function Login() {
  Swal.fire({
    icon: "success",
    title: "Successfully Login !",
    text: "",
  });
  return (
    <form className="text-center d-flex flex-column align-items-center">
      <center className="mb-3">
        <h2>Login</h2>
      </center>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control col-sm-12"
          id="Email"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control col-sm-12"
          id="Password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Login
      </button>
    </form>
  );
}

export default Login;
