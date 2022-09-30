fetch("http://localhost:5000/api/leaderboard/hard")
  .then((res) => res.json())
  .then((hard) => setHardList(hard)),