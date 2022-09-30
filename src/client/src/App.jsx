import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { HomePage, LeaderBoard } from "./pages";
import { useState, useEffect } from "react";

function App() {

  let [user, setUser] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  function getUser() {
    fetch("http://localhost:5000/api/leaderboard/TheBigH50")
      .then((res) => res.json())
      .then((current) => {
        setUser(current);        
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
   getUser();
  }, []);
  
  
  if (isLoading) {
    return (
      <div>
        <h1>Is Loading...</h1>
      </div>
    );
  } else {
  return (
    <BrowserRouter>
    <h2>Welcome ${user.users.UserName}</h2>
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`/leaderBoard/${user.users.UserID}`}>Leader Board</NavLink>
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
}

export default App;
