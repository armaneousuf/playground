// Write a function called fetchUserData(userId, callback).

// Inside it, use setTimeout to simulate a delay of 2 seconds.

// After 2 seconds, create a mock object (e.g., { id: userId, name: "Rahat" }) and pass it to the callback.

function fetchUserData(userId, callback) {
  setTimeout(() => {
    const users = {
      id: userId,
      name: "Rahat",
    };
    return callback(users)
  }, 2000);
}

function handleUserData(user) {
  console.log("User " + user.name + " logged in successfully.");
  console.log(`${user.name}'s user ID is ${user.id}`);
}

fetchUserData(101, handleUserData)