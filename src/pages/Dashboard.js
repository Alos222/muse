import Gallery from "../components/gallery"
import DepartmentData from "../departmentdata";


function Dashboard(props) {
    return(
        <div>
            Welcome
            <Gallery/>
            <DepartmentData/>
        </div>
    )
}

export default Dashboard;