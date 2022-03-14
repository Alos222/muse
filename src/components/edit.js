import axios from 'axios'
import React, {useState} from 'react'

const EditForm = (props) => {
    const commentID = props.commentID

    const url = `http://localhost:3001/api/comment/find/${commentID}`

    const [comment, setComment] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    
    console.log(comment)

    React.useEffect(() => {
        const getComment = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setComment(data);
        };
        getComment();
    }, []);

    const loaded = () =>{
        return (
            <div>{comment._id}</div>
        )
    }
    const loading = () =>{
        return (
            <h1>loading...</h1>
        )
    }
    return comment ? loaded(): loading()
    
}





export default EditForm