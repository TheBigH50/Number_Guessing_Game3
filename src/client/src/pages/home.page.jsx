import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function HomePage(props) {
  /*
  let testUser = "TheBigH50"
  let [user, setUser] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let { UserName } = useParams(testUser);
*/
  /*
  function getUser() {
    fetch(`http://localhost:5000/api/leaderboard/${UserName}`)
      .then((res) => res.json())
      .then((current) => {
        setUser(current);        
        setIsLoading(false);
        console.log(user);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
   getUser();
  }, []);
  
  
  if (isLoading) {
    return (
      <div>
        <h1>Is Loading...</h1>
      </div>
    );
  } else { */
  return (
    <div>
      <h1>Hello World</h1>
    <h2>Hello TheBigH50</h2>
    </div>
  );
}


export default HomePage;