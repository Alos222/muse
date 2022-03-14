import axios from 'axios';
import {useState} from 'react';

const Delete = (props) => {
    const com = props.commentID
    console.log(com)

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
    return(
        <form onSubmit={(a) => (handleDelete(a))}>
              <button type='submit'>delete</button>
        </form>
      
    )
}

export default Delete