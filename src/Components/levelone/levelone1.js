import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { l1task1data } from "./data/l1task1data";

const LevelOne1 = ({ setSelectedComponent }) => {
  const [answers, setAnswers] = useState(new Array(25).fill(""));
  const [error, setError] = useState("");

  function choosedAnswer(e, idx) {
    console.log(e);
    console.log(e.target.value);
    console.log(idx);
    let chosedVal = e.target.value;
    setAnswers((prev) =>
      prev.map((value, i) => (i == idx ? chosedVal : value))
    );
  }
  async function SubmitData(e) {
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 1, task: 1, answer: answers })
      .catch((err) => {
        setError(true);
      });
    console.log(req);

    if (req) {
      console.log("SUBMITTED");
      setSelectedComponent("LevelOne2");
      // setTimeout(navigate("/level-one"), 1000);
    }
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
          <form onSubmit={SubmitData}>
            {JSON.stringify(answers)}
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
                        value={val.option1}
                        checked={answers[key] == val.option1}
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
                        value={val.option2}
                        checked={answers[key] == val.option2}
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
                        value={val.option3}
                        checked={answers[key] == val.option3}
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
                        value={val.option4}
                        checked={answers[key] == val.option4}
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
              <button type="submit" className="btn btn-success">
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
