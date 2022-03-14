import { useState , useEffect} from 'react';
import axios from 'axios';


const AddComment = (props) =>  {
    console.log(props)
   
  const [ userCredentials, setUserCredentials ] = useState('')

  const [username, setUsername] = useState('');
  const [artId, setArtId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const getUser = async () => {
        const data = props
        console.log(data)

        setUserCredentials();
    };
    getUser();
}, []);

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
        <h1></h1>
      <h4>Comment</h4>
      <form onSubmit={(e) => (handleSubmit(e))}>
        <div>
          <input 
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Username'
          />
          <input 
            type='text'
            value={artId}
            onChange={(e) => setArtId(e.target.value)}  
            placeholder='ArtId'
          />
        </div>
        <div>
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            placeholder='Title'
          />
        </div>
        <div>
          <textarea  
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            type='text' 
            placeholder='UserId'
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