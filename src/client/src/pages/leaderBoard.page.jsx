import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LeaderBoard(props) {
let UID = "6";
let [isLoading, setIsLoading] = useState(true);
let [easyList, setEasyList] = useState([]);
let [hardList, setHardList] = useState([]);
let [overkillList, setOverkillList] = useState([]);
let [currentScore, setCurrentScore] = useState([]);
let { UserID } = useParams();

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
  fetch(`http://localhost:5000/api/leaderboard/users/${UserID || UID}`)
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
        <div className="whole">
            <h3 className="center">Your Current Best Scores</h3>
            <ol className="center">
              {currentScore.map((score) => (
                <li key={score.UserName}>{`${score.UserName} || Easy: ${score.EasyScore} | ${score.EasyCompletionTime} || Hard: ${score.HardScore} | ${score.HardCompletionTime} ||Overkill: ${score.OverkillScore} | ${score.OverkillCompletionTime}`}</li>
              ))} 
            </ol>
            <h1 className="center">Top 10 Scores</h1>
            <br></br>
            <h3 className="center">Easy Mode</h3>
            <ol className="center">
       {easyList.map((score) => (
              <li key={score.ScoreID}>{`${score.UserName} || Number Of Guesses: ${score.EasyScore} || Completed In: ${score.EasyCompletionTime}`}</li>
            ))}
        </ol>
        <br></br>
            <h3 className="center">Hard Mode</h3>
            <ol className="center">
       {hardList.map((score) => (
              <li key={score.ScoreID}>{`${score.UserName} || Number Of Guesses: ${score.HardScore} || Completed In: ${score.HardCompletionTime}`}</li>
            ))}
        </ol>
        <br></br>
            <h3 className="center">Hard Mode</h3>
            <ol className="center">
       {overkillList.map((score) => (
              <li key={score.ScoreID}>{`${score.UserName} || Number Of Guesses: ${score.OverkillScore} || Completed In: ${score.OverkillCompletionTime}`}</li>
            ))}
        </ol>
        <footer className="center">
          <p>**Ties in upper tiers are determined progressively by lower tier placement**</p>
        </footer>
        </div>
    )

}
}

export default LeaderBoard;