import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../context/context';

const Auth = () => {

    const { userCredentials, setUserCredentials } = useContext(Context);
    const navigate = useNavigate();

    const register = () => navigate('/register');
    const login = () => navigate('/login');
    const logout = () => {

        setUserCredentials({ token: undefined, user: undefined});

        localStorage.setItem('auth-token', '');
        navigate('/login')
    };
    const Home = () => {

        navigate('/dashboard')
    }
    return (
        <div>
            {userCredentials.token ? (
                <div>
                    <button onClick={Home}>Home</button>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <button onClick={register}>Register</button>
                    <button onClick={login}>Login</button>
                </div>
            )
            }
        </div>
    )
}

export default Auth