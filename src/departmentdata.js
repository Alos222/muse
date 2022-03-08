import React from "react";
import DepCard from "./components/depcard"

const DepartmentData = () => {
    const url = "https://collectionapi.metmuseum.org/public/collection/v1/departments"

    const [department, setDepartment] = React.useState("null");
    // const [deptBool, setDeptBool] = React.useState(true)
    //useEffect to run getArtwork when component mounts
    React.useEffect(() => {
        //function to fetch coin data
        const getDepartment = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setDepartment(data);
            // console.log(dep)
            // setDeptBool(false)
        };
        getDepartment();
    }, []);

    // console.log(department.departments)

    // const dep = department.departments.map(dept => console.log(dept))

    //load function for when data is fetched
    console.log(department.departments)
    
    const loaded = () => {
        return (
            <div>
                <h2>This is showing up</h2>
            
            </div>
        );
    };

    //Function for when data doesn't exist 
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return department ? loaded() : loading();
}

export default DepartmentData;