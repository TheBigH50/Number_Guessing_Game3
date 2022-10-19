const gameEasy = () => {
    
    
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
  }

export default gameEasy;