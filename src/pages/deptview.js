import React from "react"
import { useParams } from "react-router-dom"

const DeptView = () => {
    const params = useParams();
    console.log(params)
    const deptkey = params.deptID
    console.log(deptkey)
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${deptkey}`
    console.log(url)

    const [artIDs, setArtIDs] = React.useState()
    console.log(artIDs)

    React.useEffect(() => {
        const getArtIDs = async () => {
            const response = await fetch(url)
            const data = await response.json()
            const iDs = data.objectIDs
            console.log(iDs)
            const iDMap = iDs.map((ID) => {
                return {ID}
            })
            setArtIDs(iDMap)
        };
        getArtIDs();
    }, [url])


    return (
        <p>1</p>
    )
}

export default DeptView;