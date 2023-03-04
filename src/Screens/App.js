import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import LevelFour from "./levelfour";
import LevelOne from "./levelone";
import Auth from "./levelone copy";
import LevelThree from "./levelthree";
import LevelTwo from "./leveltwo";

// const App2 = () => {
//   return (
//     <div className="Home">
//       {/* <Navbar /> */}
//       {/* <Header />  */}

//       {/* <div className="dashboard-row"> */}
//       <div>{/* <Sidebar /> */}</div>
//       <Routes>
//         <Route path="/" element={<LevelOne />} />
//         <Route path="/level-one" element={<LevelOne />} />
//         <Route path="/level-two" element={<LevelTwo />} />
//         <Route path="/level-three" element={<LevelThree />} />
//         <Route path="/level-four" element={<LevelFour />} />
//       </Routes>
//       {/* <Route path="/level-five" element={<LevelFive />} /> */}
//       {/* </div> */}
//       {/* <LevelOne /> */}
//       {/* <LevelTwo /> */}
//       {/* <LevelThree /> */}
//     </div>
//   );
// };

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
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route path="/level-one" element={<LevelOne />} />
        <Route path="/level-two" element={<LevelTwo />} />
        <Route path="/level-three" element={<LevelThree />} />
        <Route path="/level-four" element={<LevelFour />} />
      </Routes>{" "}
    </div>
  );
};

export default App;
// export default LevelOnea
// export default LevelTwo
// export default LevelThree
// export default LevelFour
