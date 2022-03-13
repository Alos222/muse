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

    const [art, setArt] = React.useState()
    console.log(art)

    React.useEffect(() => {
        const getArtIDs = async () => {
            const response = await fetch(url)
            const data = await response.json()
            const iDs = data.objectIDs
            console.log(iDs)
            let artArr = []
            const slicedIDs = iDs.slice(-50)
            slicedIDs.map((ID) => {
                const callURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ID}`
                axios({
                    method: 'get',
                    url: callURL,
                    responseType: 'json'
                }).then(function (response) {
                    const json = response.data

                    artArr.push(json)
                })
                // return artResponse
            })
            // const iDMap = iDs.map((ID) => {
            //     return {ID}
            // })
            // console.log(iDMap)
            setArt(artArr)
        };
        getArtIDs();
    }, [url])


    return (
        <p>1</p>
    )
}

export default DeptView;