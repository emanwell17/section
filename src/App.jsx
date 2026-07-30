import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Login2 from "./Login2";
import Login1 from "./Login1";
import Landing from "./Landing";
import Landing2 from "./Landing2";
import Project from "./Project";
import { Route, Routes } from "react-router";
import { Home } from "lucide-react";
import Cta_section from "./Cta_section";

function App() {
  return (


    <Routes>
      <Route path="/login1" element={<Login1 />} />
      <Route path="/login2" element={<Login2 />} />
      <Route path="/landing" element={<Landing/>}/>
      <Route path="/landing2" element={<Landing2/>}/>
      <Route path="/cta-section" element={<Cta_section/>}/>
      <Route path="/" element={<Project/>}/>
      

    </Routes>
  );
}

export default App;
