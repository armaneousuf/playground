const apiResponse = {
  status: 200,
  data: {
    user: {
      username: "coder123",
      email: "coder@example.com"
    },
    topScores: [100, 85, 70]
  }
};

const {data: {user: {username}, topScores: [highestScore]}} = apiResponse

console.log(username);
console.log(highestScore);