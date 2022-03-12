import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/context';

export default function Register() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [error, setError] = useState();

    const { setUserCredentials } = useContext(Context);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const newUser = { username, email, password, passwordCheck };

            await axios.post
                (
                    'http://localhost:3001/api/auth/register',
                    newUser
                );

            const res = await axios.post
                (
                    "http://localhost:3001/api/auth/login",
                    {
                        email,
                        password
                    }
                );

            setUserCredentials({

                token: res.data.token,
                user: res.data.user,

            });

            localStorage.setItem('auth-token', res.data.token);
            navigate('/');

        } catch (err) {
            setError(err);
        } finally {
            navigate('/login');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form
                onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='username'
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type='email'
                    placeholder='email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='password'
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='confirm password'
                    onChange={e => setPasswordCheck(e.target.value)}
                />
                <button
                    type='submit'>
                    Register
                </button>
            </form>
            {error && <p>
                Account exists for this email
            </p>}
            <p>Already have an account?</p>
            <Link to='/login' >Login</Link>
        </div>
    )
}