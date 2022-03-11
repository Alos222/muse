import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import Context from '../context/context'

export default function Auth() {

    const { userCred, setUserCred } = useContext(Context);
    const nav = useNavigate();

    const register = () => nav('/register');
    const login = () => nav('/login');
    const logout = () => {

        setUserCred({ token: undefined, user: undefined});

        localStorage.setItem('auth-token', '');
        nav('/login')
    };
    const accountDelete = () => {

        setUserCred({token:undefined, user:undefined});

        localStorage.setItem('auth-token', '');
        nav('/login')
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