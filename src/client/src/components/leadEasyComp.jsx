import { useState, useEffect } from "react";

function MainLeaderboard(props) {

let [easyList, setEasyList] = useState([]);
let [hardList, setHardList] = useState([]);
let [overkillList, setOverkillList] = useState([]);

    const fetchData = async () => {
  await Promise.all ([
  fetch("http://localhost:5000/api/leaderboard/easy")
  .then((res) => res.json())
  .then((easy) => setEasyList(easy)),
  fetch("http://localhost:5000/api/leaderboard/hard")
  .then((res) => res.json())
  .then((hard) => setHardList(hard)),
  fetch("http://localhost:5000/api/leaderboard/overkill")
  .then((res) => res.json())
  .then((hard) => setOverkillList(hard)),
    ]);
  
    
  
    .catch(err) {
      console.error(err);
      setLeaderboardState("Could not connect to test api endpoint :(");
    }
    });
    )

}