import Gallery from "../components/gallery"
import DepartmentData from "../components/departmentdata";
import Sidebar from "../components/sidebar"
import { Row, Col, Card, Container } from "react-bootstrap"


function Dashboard(props) {
    return (
        <Container fluid className={"no-gutters mx-0 px-0"}>
            <Gallery />
            <Row>
                <Sidebar />
                <DepartmentData />
            </Row>

        </Container>
    )
}

export default Dashboard;