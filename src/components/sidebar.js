import { Link } from "react-router-dom"
import {Row, Col, Stack} from "react-bootstrap"

const Sidebar = () => {
    return (
    
            <Col sm={2}>
            <Stack gap={2}> 
                 <Link to="/dashboard">Dashboard</Link>
                 <div>Collections</div>
                 <div>Threads</div>
                 <div>Search</div>
                 </Stack>
            </Col>
    )
}


export default Sidebar;