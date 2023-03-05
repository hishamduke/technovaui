import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Dashboardnav from "../Components/dashboardnav";
import Header from "../Components/header";
import Navbar from "../Components/navbar";
import Register from "../Components/Register";
import Sidebar from "../Components/sidebar";
import Admin from "./Admin";
import Completed from "./Completed";
import LevelFive from "./levelfive";
import LevelFour from "./levelfour";
import LevelOne from "./levelone";
import Auth from "./levelone copy";
import LevelThree from "./levelthree";
import LevelTwo from "./leveltwo";
import StageOne from "./StageOne";
import ViewUser from "./ViewUser";

const App = () => {
  return (
    <div className="Home">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/login"
          element={
            <>
              <Header />
            </>
          }
        />
        {/* <Route path="/register" element=<Register /> /> */}

        <Route path="/stage-one" element={<StageOne />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/level-one" element={<LevelOne />} />
        <Route path="/level-two" element={<LevelTwo />} />
        <Route path="/level-three" element={<LevelThree />} />
        <Route path="/level-four" element={<LevelFour />} />
        <Route path="/level-five" element={<LevelFive />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:userId" element={<ViewUser />} />
        {/* <Route path="*" errorElement={<Navigate to={"/login"} />} /> */}
      </Routes>{" "}
    </div>
  );
};

export default App;
// export default LevelOnea
// export default LevelTwo
// export default LevelThree
// export default LevelFour
