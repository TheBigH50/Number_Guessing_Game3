import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GamePage() {

let [ easyGame, setEasyGame ] = useState([]);
let [ isLoading, setIsLoading ] = useState(true);

    function gameEasy() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "__cflb=02DiuEMAZFhhWAbaKrDP2YYpUK2thcATmzfaiAhCEFueK");
        
        var raw = JSON.stringify({
          "jsonrpc": "2.0",
          "method": "generateIntegers",
          "params": {
            "apiKey": "86555fa2-c0e1-4380-83f7-e862fdd2d686",
            "n": 1,
            "min": 1,
            "max": 10,
            "replacement": false,
            "base": 10,
            "pregeneratedRandomization": null
          },
          "id": 23412
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
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
        gameEasy();
       }, []);
       
    
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
            <p>{`My number is: ${easyGame.data}`}</p>
            </div>
            

        );
}
}

export default GamePage;