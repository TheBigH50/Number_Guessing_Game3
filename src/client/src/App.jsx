import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { HomePage, LeaderBoard } from "./pages";
import { useState, useEffect } from "react";

function App() {


  

  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/leaderBoard"}>Leader Board</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/leaderBoard" element={<LeaderBoard />} />
    </Routes>
    </BrowserRouter>    
  );
}

export default App;
