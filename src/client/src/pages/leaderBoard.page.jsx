import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LeaderBoard(props) {
let UID = 6;
let [isLoading, setIsLoading] = useState(true);
let [easyList, setEasyList] = useState(null);
let [hardList, setHardList] = useState(null);
let [overkillList, setOverkillList] = useState(null);
let [currentScore, setCurrentScore] = useState(null);
let { UserID } = useParams(UID);

function getEasy() {
  fetch("http://localhost:5000/api/leaderboard/easy")
    .then((res) => res.json())
    .then((easy) => {
      setEasyList(easy);      
    })
    .catch((error) => console.error(error));
}

function getHard() {
  fetch("http://localhost:5000/api/leaderboard/hard")
    .then((res) => res.json())
    .then((hard) => {
      setHardList(hard);      
    })
    .catch((error) => console.error(error));
}

function getOverkill() {
  fetch("http://localhost:5000/api/leaderboard/overkill")
    .then((res) => res.json())
    .then((overkill) => {
      setOverkillList(overkill);         
    })
    .catch((error) => console.error(error));
}

function getCurrentScore() {
  fetch(`http://localhost:5000/api/leaderboard/${UserID}`)
    .then((res) => res.json())
    .then((current) => {
      setCurrentScore(current);
      setIsLoading(false);    
    })
    .catch((error) => console.error(error));
}

useEffect(() => {
  getEasy();
  getHard();
  getOverkill();
  getCurrentScore();
}, []);

console.log(easyList);
console.log(hardList);
console.log(overkillList);
console.log(currentScore);
if (isLoading) {
    return (
      <div>
        <h1>Is Loading...</h1>
      </div>
    );
  } else {
    return (
        <div>

            <h1>Top Players</h1>
            
        </div>
    )

}
}

export default LeaderBoard;