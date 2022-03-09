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
            console.log(data)
            const dept = data.departments.map((dept) => dept)
            console.log(dept[0].displayName)
            const mapped = dept.map((names) => (names.displayName))
            console.log(mapped)
            setDepartment(mapped);
            // console.log(dep)
            // setDeptBool(false)
        };
        getDepartment();
    }, []);
console.log(department)
    // console.log(department.departments)

    // const dep = department.departments.map(dept => console.log(dept))

    //load function for when data is fetched

    const loaded = () => {
        return (
            <div>
                <h2>This is showing up</h2>
                {department}

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