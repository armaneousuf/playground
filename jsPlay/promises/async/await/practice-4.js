async function getData() {
    try {
        const [user, post, comment] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/comments/1').then(res => res.json())
        ])

        console.log(user.name)
        console.log(post.title)
        console.log(comment.email)
    } catch(error) {
        console.log(error)
    }
}

getData()