import { useState, useEffect } from "react";
import gameEasy from "../../../server/controllers/game.controller";


function GamePage() {

let [ easyGame, setEasyGame ] = useState([]);
let [ isLoading, setIsLoading ] = useState(true);

    
          //make a fetch call to my fetch on back

        
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