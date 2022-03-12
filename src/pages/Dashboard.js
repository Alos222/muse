import Gallery from "../components/gallery"

import Departments from "../components/Departments"
import { Row, Col, Card, Container, Tab, Nav } from "react-bootstrap"



function Dashboard(props) {
    return (
        <Container fluid className={"no-gutters mx-0 px-0"}>
            <Row>
                <Col>
                <div className="userWelcome">
                    <h2>Welcome</h2>
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