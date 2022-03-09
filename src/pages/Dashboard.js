import Gallery from "../components/gallery"
import DepartmentData from "../components/departmentdata";
import {Row, Col, Card, Container} from "react-bootstrap"


function Dashboard(props) {
    return (
        <div>
            Welcome
            <Gallery />
            <Container>
            <DepartmentData/>
            </Container>
            
        </div>
    )
}

export default Dashboard;