import React from "react";
import useAuth from "./useAuth";
function useRefresh() {
  let { SetToken } = useAuth();
  let Refresh = async () => {
    try {
      let Token = await fetch("http://localhost:1212/admin/refresh", {
        credentials: "include",
      });
      if (Token.status == 401) throw Error("Session Expired");
      Token = await Token.json();
      SetToken(Token.AToken);
      return Token;
    } catch (Err) {
      throw Error(Err.message);
    }
  };

  return Refresh;
}

export default useRefresh;
