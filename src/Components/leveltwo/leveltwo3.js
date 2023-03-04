import React, { useState } from "react";
import { l2task3data } from "./data/l2task3data";

const LevelTwo3 = () => {
  const [answer, setAnswer] = useState("");
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round Two</h1>
          <h3>Task 3</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l2task3data.map((val, key) => {
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
                      <img src={val.image} height="400" width="500" />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
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

export default LevelTwo3;
