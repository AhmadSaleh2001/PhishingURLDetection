import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../Helpers/useAuth";
import Swal from "sweetalert2";
import Redirect from "../Helpers/Redirect";
function Rates() {
  let [Data, SetData] = useState([]);
  let { Token, SetToken, SetUser } = useAuth();
  let navigate = useNavigate();
  useEffect(() => {
    // console.log(Token);
    let getData = async (Token) => {
      let Ans = await fetch("http://localhost:1212/rate/getAll", {
        method: "GET",
        headers: {
          Authorization: "CatchMeIfYouCan " + Token,
        },
      });
      if (Ans.status == 401) {
        let Token = await fetch("http://localhost:1212/admin/refresh", {
          credentials: "include",
        });
        if (Token.status == 401) {
          Token = await Token.json();
          Redirect("error", Token.Msg, "", () => {
            navigate("/");
          });
          SetUser(null);
          SetToken(null);
        } else {
          Token = await Token.json();
          SetToken(Token.AToken);
          getData(Token.AToken);
        }
      } else {
        Ans = await Ans.json();
        SetData(Ans.Data);
      }
    };

    getData(Token);
  }, []);
  return (
    <div>
      <center>
        <h1>Rates</h1>
      </center>
      {!Data && <h2>Loading ...</h2>}
      {Data && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">URL</th>
              <th scope="col">Rate From 5</th>
              <th scope="col">Feedback</th>
              <th scope="col">Date</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((Item, Idx) => {
              return (
                <tr key={Idx} className="">
                  <th scope="row">{Item.id}</th>
                  <td>{Item.url}</td>
                  <td>{Item.rate_from_5}</td>
                  <td>{Item.feedback}</td>
                  <td>{new Date(Item.createdAt).toUTCString()}</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Rates;
