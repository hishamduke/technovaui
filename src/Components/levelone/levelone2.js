import React, { useState } from "react";
import { l1task2data } from "./data/l1task2data";
const LevelOne2 = () => {
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
          <h3>Task 2</h3>
        </div>
        <div className="level-body">
          {JSON.stringify(answers)}
          <form>
            <ol className="level-data">
              {l1task2data.map((val, key) => {
                return (
                  <li key={key} className="level-val">
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn}
                        <img src={val.image} width="200" />
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id={`formGroupExampleInput${key}`}
                        rows="4"
                        onChange={(e) => changeData(e, key)}
                        value={answers[key]}
                      />
                    </div>
                  </li>
                );
              })}
            </ol>
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

export default LevelOne2;
