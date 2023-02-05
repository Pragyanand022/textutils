import "./App.css";
import React,{useState} from "react";

// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode,setMode]=useState("light");
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#29292f';
      document.body.style.color='white';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';

    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="about Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-5" >
      <TextForm heading="Enter your text here" mode={mode} />
      </div> 
      {/* <div className="container my-5">
      <About/>
      </div> */}
    </>
  );
}

export default App;
