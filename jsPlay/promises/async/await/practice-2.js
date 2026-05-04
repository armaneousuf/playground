// Try writing an async function called getUserData(). Inside it, use await and fetch to get "https://jsonplaceholder.typicode.com/users/2", convert it to JSON, and console.log the user's email. Wrap it all in a try/catch block!

async function getUserData() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const dataJSON = await data.json();
        console.log(dataJSON.email)
    } catch (error) {
        console.log('Something failed', error)
    }
}

getUserData()