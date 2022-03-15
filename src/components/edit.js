import axios from 'axios'
import React, { useState } from 'react'

const EditForm = (props) => {
    const commentID = props.commentID


    const url = `http://localhost:3001/api/comment/find/${commentID}`

    const urlUpdate = `http://localhost:3001/api/comment/update/${commentID}`
    console.log(urlUpdate)

    const [comment, setComment] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')

    console.log(comment)
    console.log(title)
    console.log(body)

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await axios({
                method: 'put',
                url: urlUpdate,
                data: {
                    title,
                    body
                }
            });
        } catch (err) {
            console.log(err)
        }
    }

    React.useEffect(() => {
        const getComment = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setComment(data);
            setTitle(data.title)
            setBody(data.body)
        };

        getComment();

    }, [props]);

    const loaded = () => {
        return (
            <form onSubmit={(e) => (handleUpdate(e).then(window.location.reload(false)))}>
                <div>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title'
                    />
                </div>
                <div>
                    <span>body</span>
                    <input
                        type='text'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder='Body'
                    />
                    <label></label>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
    const loading = () => {
        return (
            <h1>loading...</h1>
        )
    }
    return comment ? loaded() : loading()

}





export default EditForm