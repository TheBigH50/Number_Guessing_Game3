import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function GamePage() {

let [ easyGame, setEasyGame ] = useState([]);
let [ isLoading, setIsLoading ] = useState(true);
let { gameLevel } = useParams();

    
function getEasy() {
  fetch(`http://localhost:5000/api/game/${gameLevel}`)
    .then((res) => res.json())
    .then((easy) => {
      setEasyGame(easy);      
    })
    .catch((error) => console.error(error));
}//make a fetch call to my fetch on back

        
      useEffect(() => {
        gameEasy();
       }, []);
       
    console.log(easyGame);
    if (isLoading) {
        return (
          <div>
            <h1>Is Loading...</h1>
          </div>
        );
      } else {
        return (
<div>
            <h1>Hello World!</h1>
            <p>{`My number is: ${easyGame.result.random.data[0]}`}</p>
            </div>
            

        );
}
}

export default GamePage;