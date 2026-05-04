const getUser = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json(),
);

const getPost = fetch("https://jsonplaceholder(this will throw an error).typicode.com/posts/1").then(
  (res) => res.json(),
);

const getComments = fetch(
  "https://jsonplaceholder.typicode.com/comments/1",
).then((res) => res.json());

Promise.allSettled([getUser, getPost, getComments])
.then((value) => console.log(value))
.catch((error) => console.log(error))
