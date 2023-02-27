import React from "react";
import { useState } from "react";
import ShowMsg from "../Helpers/ShowMsg";
function Product() {
  let [Tested, SetTested] = useState(false);
  let [URL, setURL] = useState("");
  let [Rate, SetRate] = useState(5);
  let [Feedback, SetFeedback] = useState("");
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
    // console.log(CurrAns);

    if (CurrAns["Good"] == "1") SetAns(["alert-success", "Not Phishing"]);
    else SetAns(["alert-danger", "Phishing"]);
    SetTested(true);
  };

  let HandleAddRate = async (E) => {
    E.preventDefault();
    try {
      let Ans = await fetch("http://localhost:1212/rate/add", {
        method: "POST",
        body: JSON.stringify({
          rate_from_5: Rate,
          feedback: Feedback,
          url: URL,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      Ans = await Ans.json();
      console.log(Ans);
      ShowMsg("success", "Done", Ans.Msg);
    } catch (Err) {
      ShowMsg("error", "Oops...", Err.message);
    }
  };
  return (
    <form
      className="text-center d-flex flex-column align-items-center"
      method="POST"
    >
      <div className="mb-3">
        <label className="form-label">URL</label>
        <input
          type="url"
          className="form-control col-sm-12"
          id="URL"
          value={URL}
          onInput={(E) => {
            setURL(E.target.value);
          }}
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

          <label htmlFor="Feedback" className="form-label">
            Feedback(Optional)
          </label>
          <textarea
            className="form-control"
            id="Feedback"
            rows="3"
            onInput={(E) => SetFeedback(E.target.value)}
            value={Feedback}
            required
          ></textarea>
        </div>
      )}
      <button
        type="submit"
        className="btn btn-success"
        onClick={(E) => HandleAddRate(E)}
        disabled={!Tested}
      >
        Rate Model
      </button>
    </form>
  );
}

export default Product;
