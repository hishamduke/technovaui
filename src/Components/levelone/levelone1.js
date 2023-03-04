import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { l1task1data } from "./data/l1task1data";

const LevelOne1 = () => {
  const [answers, setAnswers] = useState(new Array(25).fill(0));

  function choosedAnswer(e, idx) {
    console.log(e);
    console.log(e.target.value);
    console.log(idx);
    let chosedVal = parseInt(e.target.value);
    setAnswers((prev) =>
      prev.map((value, i) => (i == idx ? chosedVal : value))
    );
  }

  async function fetchData() {
    const a = await axiosInstance.get("/check");
    console.log(a);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round One</h1>
          <h3>Task 1</h3>
        </div>
        <div className="level-body">
          <form>
            <ol className="level-data">
              {l1task1data.map((val, key) => {
                const radioGroupName = `inlineRadioOptions${key}`; // create unique radio group name
                return (
                  <li key={key} className="level-val">
                    <div>
                      <label
                        className="form-check-label"
                        htmlFor={radioGroupName}
                      >
                        {val.qstn}
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={radioGroupName}
                        id={`${radioGroupName}1`}
                        value={1}
                        checked={answers[key] == 1}
                        onChange={(e) => choosedAnswer(e, key)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`${radioGroupName}1`}
                      >
                        {val.option1}
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={radioGroupName}
                        id={`${radioGroupName}2`}
                        value={2}
                        checked={answers[key] == 2}
                        onChange={(e) => choosedAnswer(e, key)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`${radioGroupName}2`}
                      >
                        {val.option2}
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={radioGroupName}
                        id={`${radioGroupName}3`}
                        value={3}
                        checked={answers[key] == 3}
                        onChange={(e) => choosedAnswer(e, key)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`${radioGroupName}3`}
                      >
                        {val.option3}
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={radioGroupName}
                        id={`${radioGroupName}4`}
                        value={4}
                        checked={answers[key] == 4}
                        onChange={(e) => choosedAnswer(e, key)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`${radioGroupName}4`}
                      >
                        {val.option4}
                      </label>
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

export default LevelOne1;
