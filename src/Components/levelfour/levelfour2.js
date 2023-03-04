import React, { useState } from "react";
import { l4task2data } from "./data/l4task2data";

const LevelFour2 = () => {
  const [answer, setAnswer] = useState("");
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round Four</h1>
          <h3>Blind Code</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l4task2data.map((val, key) => {
                return (
                  <li key={key} className="level-val">
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn}
                      </label>
                    </div>
                    <div>
                      {/* <input type="file" className="form-control upload" id="formGroupExampleInput" rows="4"/> */}
                      <textarea
                        className="form-control"
                        id="formGroupExampleInput"
                        rows="4"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="submit">
              <button type="button" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LevelFour2;
