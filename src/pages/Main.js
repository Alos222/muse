import Hero from "../img/heroimg.png";
import Met from "../img/met.png"
import { Container, Row, Col, Stack } from "react-bootstrap";

function Main(props) {
    return (
        <Container fluid className={"no-gutters mx-0 px-0"}>
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
                                    <p>Est ex exercitation Lorem dolore eiusmod tempor. Ullamco Lorem sint est laborum. Irure sunt in culpa voluptate pariatur nostrud duis sit. Qui dolore minim reprehenderit laborum nulla sit cillum et elit cupidatat nulla non. Eiusmod minim id proident aliqua cupidatat excepteur exercitation proident anim. Ut eu veniam fugiat aliquip exercitation fugiat adipisicing pariatur nostrud dolor. Pariatur et dolor magna laborum eu cupidatat mollit deserunt dolor cupidatat ex.</p>
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