import { useState, useEffect } from "react";

function LeaderBoard(props) {
let [isLoading, setIsLoading] = useState(true);
let [easyList, setEasyList] = useState(null);
let [hardList, setHardList] = useState(null);
let [overkillList, setOverkillList] = useState(null);

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
      setIsLoading(false);    
    })
    .catch((error) => console.error(error));
}

useEffect(() => {
  getEasy();
  getHard();
  getOverkill();
}, []);

console.log(easyList);
console.log(hardList);
console.log(overkillList);
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