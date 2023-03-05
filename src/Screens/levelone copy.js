import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      console.log("HAS");
      if (localStorage.getItem("ADMIN")) navigate("/admin");
      else navigate("/level-one");
    } else {
      navigate("/login");
      console.log("DOESNT HAVE");
    }
  }, []);

  return <div className="dashboard">"Hey"</div>;
};

export default Auth;

// USER
//  uname
//  pwd
// selected

//  Level1 Answers

//  dwa
//  adwdwa
//  dawwda

//  Level2 ,2

//level 4,5
//only selected

// ADMIN
// show finalists
