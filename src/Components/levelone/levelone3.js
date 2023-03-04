import React, { useState } from "react";
import { l1task3data } from "./data/l1task3data";

const LevelOne3 = () => {
  const [answers, setAnswers] = useState(new Array(15).fill(""));
  function changeData(e, idx) {
    setAnswers((prev) =>
      prev.map((value, i) => (i == idx ? e.target.value : value))
    );
  }
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round One</h1>
          <h3>Task 3</h3>
        </div>
        <div className="level-body">
          {JSON.stringify(answers)}
          <form>
            <ul className="level-data">
              {l1task3data.map((val, key) => {
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
                      <img src={val.image} height="100" width="150" />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id={`formGroupExampleInput${key}`}
                        rows="4"
                        value={answers[key]}
                        onChange={(e) => changeData(e, key)}
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

export default LevelOne3;
