import React from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Card, Col, Row } from "react-bootstrap";


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
            const iDs = data.objectIDs.sort()
            console.log(iDs)
            const slicedIDs = iDs.slice(0, 10)
            console.log(slicedIDs)
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
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={obj.primaryImage ? obj.primaryImage : "no image"} />
                            <Card.Title>
                                {obj.title}
                            </Card.Title>
                            <Card.Body>
                                {obj.artistDisplayName ? obj.artistDisplayName : "Unknown"}
                            </Card.Body>
                        </Card>
                    ))
                    setArtCard(mappedArr)
                    console.log(mappedArr)
                })
            })
        };
        getArt();
    }, [url])


    return (
        <Row>
            <Col>{artCard}</Col>
        </Row>

    )
}

export default DeptView;