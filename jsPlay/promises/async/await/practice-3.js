async function postsData() {
  try {
    const data = await fetch("https://json__placeholder.typicode.com/posts/1");
    const dataJson = await data.json();
    console.log(dataJson.title);
  } catch (error) {
    console.log(error);
  }
}

postsData();
