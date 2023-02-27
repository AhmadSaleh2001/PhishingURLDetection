import React from "react";
import useAuth from "./useAuth";
function useLogout() {
  let { SetUser, SetToken } = useAuth();
  let Logout = async () => {
    try {
      SetUser(null);
      SetToken(null);
      await fetch("http://localhost:1212/admin/logout", {
        credentials: "include",
      });
    } catch (Err) {
      console.log("Error When Logout", Err);
    }
  };

  return Logout;
}

export default useLogout;
