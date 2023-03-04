import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  async function SubmitData(e) {
    e.preventDefault();
    const a = await axiosInstance
      .post("/auth/register", data)
      .catch((err) => alert("error occured"));
    console.log(a);
    if (a) {
      console.log("SUCCESS");
      navigate("/login");
    }
  }
  function changeData(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    return;
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
                <h2 style={{ color: "black" }}> Register</h2>
                {JSON.stringify(process.env)}
                <div class="mb-3">
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      value={data.name}
                      placeholder="Minimum 5 characters"
                      onChange={changeData}
                      required
                    />
                  </div>
                  <label for="exampleInputEmail1" class="form-label">
                    Username
                  </label>
                  <input
                    // type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    name="username"
                    aria-describedby="emailHelp"
                    placeholder="Minimum 5 characters"
                    onChange={changeData}
                    value={data.username}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Minimum 6 characters"
                    onChange={changeData}
                    value={data.password}
                    required
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
                    Register
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Register;
