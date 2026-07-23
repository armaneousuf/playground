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

// hardway
// const {data: {user: {username}, topScores: [highestScore]}} = apiResponse

// human-readable
const {user, topScores} = apiResponse.data;

const {username} = user;
const [highestScore] = topScores;

console.log(username);
console.log(highestScore);