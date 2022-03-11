import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Context from '../context/context';
import axios from 'axios';
import ErrorNotice from '../components/ErrorNotice';

const Login =() => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const { setUserCredentials } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = { email, password };

            const res = await axios.post
                (
                    "http://localhost:3001/api/auth/login",
                    user
                );
            console.log(res)
            setUserCredentials({

                token: res.data.token,
                user: res.data.user,

            });

            localStorage.setItem('auth.token', res.data.token);

        } catch (err) {

            console.log(err);

        } finally {
            navigate('/dashboard');
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <form
                onSubmit={handleSubmit}>
                {error &&
                    <ErrorNotice
                        message={error}
                        clearError={() => setError(undefined)}
                    />
                }

                <input
                    type='text'
                    placeholder='email'
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type='password'
                    placeholder='password'
                    onChange={e => setPassword(e.target.value)}
                />
                <button type='submit'>Login</button>
            </form>
            <p>Don't have an account?</p>
            <Link
                to='/register'>
                Register
            </Link>
        </div>
    )
}

export default Login