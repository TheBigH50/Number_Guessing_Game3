import fetch from 'node-fetch';

const gameEasy = async () => {

  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "__cflb=02DiuEMAZFhhWAbaKrDP2YYpUK2thcATmzfaiAhCEFueK");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };     
    
    var raw = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "generateIntegers",
      "params": {
        "apiKey": `${config.apiKey}`,
        "n": 1,
        "min": 1,
        "max": 10,
        "replacement": false,
        "base": 10,
        "pregeneratedRandomization": null
      },
      "id": 23412
    });

    return await fetch("https://api.random.org/json-rpc/4/invoke", requestOptions)          
          .then((res) => res.json())
          .then((easy) => {
            setEasyGame(easy);
            setIsLoading(false);
          })
          .catch((error) => console.error(error));
      }    
  
  

export default gameEasy;