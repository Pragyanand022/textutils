import "./App.css";
import React, { useState } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { 
//   BrowserRouter as Router, 
//   Route, 
//   Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#29292f';
      document.body.style.color = 'white';
      showAlert("DarkMode has been enabled!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("DarkMode has been desabled!", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" about="about Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-5" >
        <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />
        {/* <Routes> */}
          {/* <Route exaxt path="/about" element={<About showAlert={showAlert} mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />}>
          </Route> */}
        {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
