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
                    <div className="comments">
                        <h5>{comment.title}</h5>
                        <p>{comment.body} by {comment.username}</p>
                        {(userId === comment.userId) ? <Delete commentID={comment._id} /> : ""}
                    </div>
                ))
                setMappedComments(data);
            }
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
        <div className="Cards">
            {mappedComments}
            <h1></h1>
            <h5>Post a comment</h5>
            <form onSubmit={(e) => (handleSubmit(e).then(window.location.reload(false)))}>
                <div className="commentinputs">
                    <div>
                        <input
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Title here...'
                            size="35"
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder='write here...'
                            size="40"
                            style={{height: 100}}
                        />
                        <label></label>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddComment