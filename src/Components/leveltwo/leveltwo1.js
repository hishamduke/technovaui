import React, { useState } from "react";
import { l2task1data } from "./data/l2task1data";

const LevelTwo1 = () => {
  const [answer, setAnswer] = useState("");
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round Two</h1>
          <h3>Task 1</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l2task1data.map((val, key) => {
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
                    <div className="level-image">
                      <img src={val.image} height="500" width="600" />
                    </div>
                    <div className="form-outline mb-4">
                      <textarea
                        className="form-control"
                        id="formGroupExampleInput"
                        rows="4"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      ></textarea>
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

export default LevelTwo1;
