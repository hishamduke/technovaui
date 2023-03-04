import { l1task4data } from "./data/l1task4data";
import { useState } from "react";

const LevelOne4 = () => {
  const [answer, setAnswer] = useState("");
  function changeData(e) {
    setAnswer(e.target.value);
  }
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round One</h1>
          <h3>Task 4</h3>
        </div>
        <div className="level-body">
          <form>
            <ol className="level-data">
              {l1task4data.map((val, key) => {
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
                      <img
                        src={require("../../images/l1task4.jpg")}
                        height="400"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <textarea
                        className="form-control"
                        id="formGroupExampleInput"
                        rows="4"
                        value={answer}
                        onChange={changeData}
                      ></textarea>
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

export default LevelOne4;
