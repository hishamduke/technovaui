import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import { l1task5data } from "./data/l1task5data";
const LevelOne5 = ({ setSelectedComponent }) => {
  const [answer, setAnswer] = useState(new Array(6).fill(""));
  const nav = useNavigate();
  function changeData(e, idx) {
    setAnswer((prev) =>
      prev.map((value, i) => (i == idx ? e.target.value : value))
    );
  }

  async function SubmitData(e) {
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 1, task: 5, answer })
      .catch((err) => {
        alert("Some error occured");
      });

    if (req) {
      nav("/break");
    }
  }

  async function fetchData() {
    const a = await axiosInstance.get("/check");
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round One</h1>
          <h3>Task 5</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l1task5data.map((val, key) => {
                return (
                  <li key={key} className="level-val">
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.para1}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.para2}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.para3}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.para4}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.para5}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.para6}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn1}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn2}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn3}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn4}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn5}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn6}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn7}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn8}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn9}
                      </label>
                    </div>
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn10}
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="paragraph 1"
                        value={answer[0]}
                        onChange={(e) => changeData(e, 0)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="paragraph 2"
                        value={answer[1]}
                        onChange={(e) => changeData(e, 1)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="paragraph 3"
                        value={answer[2]}
                        onChange={(e) => changeData(e, 2)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="paragraph 4"
                        value={answer[3]}
                        onChange={(e) => changeData(e, 3)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="paragraph 5"
                        value={answer[4]}
                        onChange={(e) => changeData(e, 4)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="paragraph 6"
                        value={answer[5]}
                        onChange={(e) => changeData(e, 5)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="submit">
              {/* <button
                onClick={SubmitData}
                type="submit"
                className="btn btn-success"
              >
                Save
              </button> */}
              <button
                type="button"
                className="btn btn-success"
                onClick={SubmitData}
              >
                Go to next round
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LevelOne5;
