import React from "react";
import { useState } from "react";
function Rates() {
  let [Data, SetData] = useState([
    {
      Id: 1,
      URL: "www.youtube.com",
      RateFrom5: "5",
      Feedback: "Good Classification",
      Date: "25-12-2022",
    },
    {
      Id: 2,
      URL: "https://translate.google.com/",
      RateFrom5: "1",
      Feedback: "Classify This URL As Phishing",
      Date: "20-11-2022",
    },
  ]);
  return (
    <div>
      <center>
        <h1>Rates</h1>
      </center>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">URL</th>
            <th scope="col">Rate From 5</th>
            <th scope="col">Feedback</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((Item) => {
            return (
              <tr>
                <th scope="row">{Item.Id}</th>
                <td>{Item.URL}</td>
                <td>{Item.RateFrom5}</td>
                <td>{Item.Feedback}</td>
                <td>{Item.Date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Rates;
