import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";

function App() {

 const [mode, setMode] = useState('light')
 const btnToggleThemeMode = ()=>{
  console.log('toggleDarkMode', mode)
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = "white"
  }

 }
  return (
    <>
      
      {/* <Navbar projectname="TextUtils" home='Home' about="About" mode={mode} toggleDarkMode={btnToggleThemeMode}/> */}
   
        {/* <TextForm formText="Convert Text Formate" mode={mode}/> */}
    

      {/* <div className="container mt-3">
      <About/>
      </div> */}

<BrowserRouter>
      <Navbar projectname="TextUtils" home='Home' about="About" mode={mode} toggleDarkMode={btnToggleThemeMode}/>
      <Routes>
        <Route exact path="/" element={<TextForm formText="Convert Text Formate" mode={mode}/>}/>
        <Route exact path="/about" element={<About />} />  
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
