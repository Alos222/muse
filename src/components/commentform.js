import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Delete from "../components/delete"
import axios from 'axios';


const AddComment = (props) => {

    const params = useParams()
    const artKey = params.objectID

    const url = `http://localhost:3001/api/comment/${artKey}`


    const [username, setUsername] = useState('');
    const [artId, setArtId] = useState();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('set');
    console.log(userId)
    const [commentList, setCommentList] = useState('')
    const [mappedComments, setMappedComments] = useState('')

    
    const [isOwner, setIsOwner] = useState('false')
    console.log(isOwner)

    useEffect(() => {
        const getUser = async () => {
            const id = props.user._id
            const username = props.user.username
            const artworkID = props.art.objectID
            setArtId(artworkID);
            setUserId(id);
            setUsername(username);
        };
        getUser();
        const getComments = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setCommentList(data)
        }
        getComments().then(function () {
            const mapComments = async () => {
                const data = commentList.map((comment) => (
                    <div>
                        {console.log(userId)}
                        {console.log('testing' + (userId === comment.userId))}
                        <h5>{comment.title}</h5>
                        <p>{comment.body}</p>
                        {(userId === comment.userId) ? <Delete commentID={comment._id} /> : "not owner"}
                    </div>
                ))
                setMappedComments(data);}
                console.log(userId)
            mapComments().then(function () {
              
                }  
            );
        }
        );
    }, [props]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post
                (
                    'http://localhost:3001/api/comment/create',
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        username,
                        artId,
                        title,
                        body,
                        userId,
                    });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {mappedComments}
            <h1></h1>
            <h4>Comment</h4>
            <form onSubmit={(e) => (handleSubmit(e).then(window.location.reload(false)))}>
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
        </div>
    )
}

export default AddComment