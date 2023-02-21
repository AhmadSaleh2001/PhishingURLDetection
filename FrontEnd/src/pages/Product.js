import React from "react";
import { useState } from "react";

function Product() {
  let [Tested, SetTested] = useState(false);
  let [URL, setURL] = useState("");
  let [Rate, SetRate] = useState(5);
  let [Ans, SetAns] = useState([]);
  let HandleInput = (E) => {
    if (+E.target.value <= 5) SetRate(E.target.value);
  };

  let Check = async (E) => {
    E.preventDefault();
    let formData = new FormData();
    formData.append("URL", URL);
    let CurrAns = await fetch(
      "http://ahmadsaleh.pythonanywhere.com/classify/",
      {
        method: "POST",
        body: formData,
        headers: { ContentType: "multipart/form-data" },
      }
    );
    CurrAns = await CurrAns.json();
    console.log(CurrAns);

    if (CurrAns["Good"] == "1") SetAns(["alert-success", "Not Phishing"]);
    else SetAns(["alert-danger", "Phishing"]);
    SetTested(true);
  };
  return (
    <form className="text-center d-flex flex-column align-items-center">
      <div className="mb-3">
        <label className="form-label">URL</label>
        <input
          type="url"
          className="form-control col-sm-12"
          id="URL"
          value={URL}
          onInput={(E) => setURL(E.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mb-3"
        onClick={(E) => Check(E)}
      >
        Check
      </button>
      {Tested && <div className={"alert " + Ans[0]}>{Ans[1]}</div>}

      {Tested && (
        <div className="mb-3">
          <label className="form-label">Rate Model</label>
          <input
            type="number"
            className="form-control col-sm-12 mb-3"
            id="Number"
            required
            min={0}
            max={5}
            value={Rate}
            onInput={(E) => HandleInput(E)}
          />
        </div>
      )}
      <button type="submit" className="btn btn-success" disabled={!Tested}>
        Rate Model
      </button>
    </form>
  );
}

export default Product;
