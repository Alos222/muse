import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../context/context';

const Auth = () => {

    const { userCred, setUserCred } = useContext(Context);
    const navigate = useNavigate();

    const register = () => navigate('/register');
    const login = () => navigate('/login');
    const logout = () => {

        setUserCred({ token: undefined, user: undefined});

        localStorage.setItem('auth-token', '');
        navigate('/login')
    };
    const accountDelete = () => {

        setUserCred({token:undefined, user:undefined});

        localStorage.setItem('auth-token', '');
        navigate('/login')
    }
    return (
        <div>
            {userCred ? (
                <div>
                    <button onClick={accountDelete}>Delete Account</button>
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