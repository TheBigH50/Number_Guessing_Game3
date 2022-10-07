import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { HomePage, LeaderBoard } from "./pages";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
    <h2 className="welcome">Welcome</h2>
    <nav>
      <ul>
        <li className="lnks">
          <NavLink to={"/"} style={({ isActive }) => ({
            color: isActive ? '#FF0000' : '#FF0000'
          })}>Home</NavLink>
        </li>
        <li className="lnks">
          <NavLink to={"/leaderBoard"} style={({ isActive }) => ({
            color: isActive ? '#FF0000' : '#FF0000'
          })}>Leader Board</NavLink>
        </li>
        <li className="lnks">
          <NavLink to={"/game"} style={({ isActive }) => ({
            color: isActive ? '#FF0000' : '#FF0000'
          })}>Game</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/leaderBoard" element={<LeaderBoard />} />
      <Route path="/game" element={<Game />} />
    </Routes>
    </BrowserRouter>    
  );
}


export default App;
