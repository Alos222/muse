import React from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'


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
            const slicedIDs = iDs.slice(-10)
            const urlCalls = slicedIDs.map((ID) => {
                const callURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ID}`
                const artResponse = axios({
                    method: 'get',
                    url: callURL,
                    responseType: 'json'
                })
                console.log(artResponse)
            })
            // const iDMap = iDs.map((ID) => {
            //     return {ID}
            // })
            // console.log(iDMap)
            setArtIDs(iDs)
        };
        getArtIDs();
    }, [url])


    return (
        <p>1</p>
    )
}

export default DeptView;