import Hero from "../img/heroimg.png";
import Met from "../img/met.png"
import { Container, Row, Col, Stack } from "react-bootstrap";


function Main(props) {
    return (
        <Container fluid className={"no-gutters mx-0 px-0"} id="maincontain">
            <Row>
                <img src={Hero} className="hero_img" alt="hero image" />
            </Row>
            <Row>
                <Col sm={6}>
                    <Row className="justify-content-md-center">
                        <Col sm={6}>
                            <Stack gap={3}>
                                <div className="About">
                                    <h2>About Muse</h2>
                                    <p>Muse is an app that is powered by The Metropolitan museum of art’s openAccess API. Muse’s goal is to create a user experience that encourages sharing of opinions on art pieces while educating users on Art History. Users will be able to browse collections created by The MET and create their own collections. Users will be able to create threads on other users' collections as well as create/share notecards and pop quizzes.</p>
                                </div>
                            </Stack>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <img src={Met} className="met_img" alt="The Met" />
                </Col>
            </Row>
        </Container>
    )
}

export default Main;