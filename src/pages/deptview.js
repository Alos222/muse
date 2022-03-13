import React from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'


const DeptView = () => {
    const params = useParams();

    const deptkey = params.deptID

    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${deptkey}`


    const [artCard, setArtCard] = React.useState()
    let artArr = []
    
    console.log(artCard)

    React.useEffect(() => {
        const getArt = async () => {
            const response = await fetch(url)
            const data = await response.json()
            const iDs = data.objectIDs
            const slicedIDs = iDs.slice(0, 20)
            slicedIDs.map((ID) => {
                const callURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ID}`
                axios({
                    method: 'get',
                    url: callURL,
                    responseType: 'json'
                }).then(function (response) {
                    const json = response.data
                    artArr.push(json)
                    const mappedArr = artArr.map((obj) => (
                        <div>
                            <p>
                            {obj.title}
                            </p>
                        </div>
                    ))
                    setArtCard(mappedArr)
                    console.log(mappedArr)
                    
                })
                // return artResponse
            })
            // const iDMap = iDs.map((ID) => {
            //     return {ID}
            // })
            // console.log(iDMap)
            // setArt()
        };
        getArt();
    }, [url])


    return (
        <p>{artCard}</p>
    )
}

export default DeptView;