import React, { useEffect, useState } from 'react'
const url = "http://localhost:8000/posts"
function MockData() {

    const [post, setPost] = useState([])
    const getPost = async () => {
        const response = await fetch(url)
        const user = await response.json()
        setPost(user)
        console.log(post)
    }
    useEffect(() => {
        getPost()
    })
    return (
        <div>
            {post && post.map((post, i) => {
                const { title, id, author } = post
                return (
                    <ul key={i}>

                        <li><b>id: </b>{id}</li>
                        <li><b>title: </b>{title}</li>
                        <li><b> author: </b> {author}</li>
                    </ul>

                )
            })}

        </div>
    )
}

export default MockData
