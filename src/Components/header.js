import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
const Header = () => {
  const navigate = useNavigate();
  const [round, setRound] = useState(1);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  function changeData(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    return;
  }
  async function SubmitData(e) {
    localStorage.clear();
    e.preventDefault();
    const a = await axiosInstance.post("/auth/login", data).catch((err) => {
      localStorage.clear();
      setError(true);
    });
    // if (roundReq.data) setRound(round.data.data.round);
    // alert(round);
    console.log(a);
    if (a) {
      console.log("SUCCESS");
      console.log(a.data.data);
      localStorage.setItem("auth", a.data.data.token);
      localStorage.setItem("name", a.data.data.user.name);
      localStorage.setItem("username", a.data.data.user.username);

      console.log("a.data?.data?.user");
      console.log(a.data?.data?.user?.isAdmin);

      const roundReq = await axiosInstance.get("/check/round");
      console.log("roundReq.data?.data?.round");
      console.log(roundReq.data?.data?.round);
      if (roundReq.data) {
        setRound(roundReq.data?.data?.round);
      }

      if (a.data?.data?.user?.isAdmin) {
        localStorage.setItem("ADMIN", true);
        return navigate("/admin");
      }
      if (a?.data?.data?.user?.selected) {
        console.log("selected");
        console.log(round);
        if (roundReq.data?.data?.round == 4) return navigate("/level-four");
        if (roundReq.data?.data?.round == 5) return navigate("/level-five");
        return;
      } else {
        if (roundReq.data?.data?.round == 1) return navigate("/level-one");
        if (roundReq.data?.data?.round == 2) return navigate("/level-two");
        if (roundReq.data?.data?.round == 3) return navigate("/level-three");
        // return;
      }
      navigate("/login");
    }
  }
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            {/* ----- header left side ------- */}
            <div className="col-12 col-lg-6 header-left-side justify-content-between align-items-center main-herosection-images">
              <h1 className="display-2">Technova 5.0</h1>
              <p className="main-hero-para">
                The heart of Insight, Technova.....
                <br />
                Technova has the power of knowledge, flavour of fun, attainment
                of experience and elation of victory. It has many competitions,
                games and itself can be measured as a fest. Let this heart
                connect with emotion and network with technologists.
              </p>
              <h4>Login to get Started...</h4>
            </div>

            {/* --------- header right side --------- */}
            <div className="col-12 col-lg-6 header-right-side b-flex justify-content-between align-items-center">
              <form className="fstyle" onSubmit={SubmitData}>
                {" "}
                <h2 style={{ color: "black" }}> Login</h2>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    class="form-control"
                    id="exampleInputEmail1"
                    onChange={changeData}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={changeData}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "center",
                  }}
                >
                  <button type="submit" class="btn btn-primary">
                    Log In
                  </button>{" "}
                  {/* <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button> */}
                </div>
                <div
                  style={{
                    marginTop: "2rem",
                    color: "#b11",
                    fontSize: "1.3rem",
                  }}
                  onClick={() => setError(false)}
                >
                  {error && (
                    <p>Error occured while logging in, Please try again.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
