import { useState, useEffect } from "react";

function LeaderBoard(props) {
let [isLoading, setIsLoading] = useState(true);

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