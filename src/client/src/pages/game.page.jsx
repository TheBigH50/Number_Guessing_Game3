import { useState, useEffect } from "react";
import gameEasy from "../../../server/controllers/game.controller";
function GamePage() {

let [ easyGame, setEasyGame ] = useState([]);
let [ isLoading, setIsLoading ] = useState(true);

    function game () {
        
      var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "__cflb=02DiuEMAZFhhWAbaKrDP2YYpUK2thcATmzfaiAhCEFueK");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: gameEasy,
        redirect: 'follow'
      }; 

        fetch("https://api.random.org/json-rpc/4/invoke", requestOptions)          
          .then((res) => res.json())
          .then((easy) => {
            setEasyGame(easy);
            setIsLoading(false);
          })
          .catch((error) => console.error(error));
      }
    
      useEffect(() => {
        game();
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