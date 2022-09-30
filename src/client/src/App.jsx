import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { HomePage, LeaderBoard } from "./pages";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <h2>Welcome</h2>
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
