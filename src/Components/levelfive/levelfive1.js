import React, { useState } from "react";
import { l5task1data } from "./data/l5task1data";

const LevelFive1 = ({ setSelectedComponent }) => {
  const [answer, setAnswer] = useState("");

  const smallAns = "solvethisriddleandtheprizeisyours";
  const answerIsCorrect = answer.toLowerCase() == smallAns;
  function GoNext() {
    if (!answerIsCorrect) return;
    else {
      setSelectedComponent("LevelFive2");
    }
  }
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round Five</h1>
          <h3>Decrypt the Code</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l5task1data.map((val, key) => {
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
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.hint}
                      </label>
                    </div>
                    Hint:
                    <div className="level-image">
                      <img src={val.image} height="300" width="500" />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        rows="6"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="submit">
              <button
                type="button"
                onClick={GoNext}
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LevelFive1;
