import axios from 'axios';
import {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import EditForm from "../components/edit"


const Delete = (props) => {
    const com = props.commentID
    console.log(com)

    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)

    const handleDelete = async (a) => {
        a.preventDefault();
        try {
            await axios.delete (
                `http://localhost:3001/api/comment/delete/${com}`, {
                    headers: {
                        "Content-Type" : "application.json",
                    },
                    com
                }
            )
        } catch(err) {
            console.log(err)
        }
    }
    const handleEdit = async (b) => {
        b.preventDefault()
        try {
            setIsVisible(true)
        } catch(err) {
        console.log(err)
    }
}
    return(
        <div>
            {(isVisible === true) ? <EditForm commentID={com}/> : ""} 
            <button onClick={handleEdit}>Edit</button>
            <form onSubmit={(a) => (handleDelete(a).then(window.location.reload(false)))}>
              <button type='submit'>delete</button>
        </form>

        </div>
    
      
    )
}

export default Delete