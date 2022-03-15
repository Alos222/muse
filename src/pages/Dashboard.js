import Gallery from "../components/gallery"
import { useState, useEffect} from 'react'
import axios from 'axios'

import Departments from "../components/Departments"
import { Row, Col, Card, Container, Tab, Nav } from "react-bootstrap"



const Dashboard = () => {

    const [userCredentials, setUserCredentials] = useState({

        token: null,
        user: null,
    
      });
    
      useEffect(() => {
    
        const checkLoggedIn = async () => {
      
          let token = localStorage.getItem('auth-token');
          console.log('checking for login')
          console.log(token)
    
          if (!token) {
            localStorage.setItem('auth-token', '');
            token = '';
            console.log('i am null')
          }
          const tokenResponse = await axios.post
            (
              'http://localhost:3001/api/auth/tokenIsValid',
              null,
              {
                headers: {
                  'x-auth-token': token
                }
              }
            ).catch((error) => {
              console.log(error.toJSON());
            });
          console.log(tokenResponse)
          if (tokenResponse) {
            const res = await axios.post
              (
                'http://localhost:3001/api/auth/tokenIsValid',
                {
                  headers: {
                    'x-auth-token': token
                  }
                }).catch((error) => {
                  console.log(error);
                });
            setUserCredentials({
              token,
              user: tokenResponse.data.username,
             
            });
          }
        }
        checkLoggedIn();
      }, []);

    return (
        <Container fluid className={"no-gutters mx-0 px-0"} id="dashcontain">
            <Row>
                <Col>
                <div className="userWelcome">
                    <h2>Welcome {userCredentials.user}</h2>
                </div>
                </Col>
            </Row>
            <Tab.Container id="left-tabs" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Gallery</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="departments">Departments</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Gallery/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="departments">
                            <Departments/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

export default Dashboard;