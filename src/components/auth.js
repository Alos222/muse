import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../context/context';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import Icon from "../img/Profilebutton.png"

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
                    <Dropdown as={ButtonGroup} className="profileButton">
                    <Button className="profileButton" onClick={'#'}><img src={Icon} /></Button>
                    <Dropdown.Toggle className="profileButton"/>
                        <Dropdown.Menu>
                        <Dropdown.Item onClick={Home}>Home</Dropdown.Item>
                        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            
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