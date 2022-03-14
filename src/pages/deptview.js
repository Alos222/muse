import React from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Card, Button, Row, Col, CardGroup} from "react-bootstrap";


const DeptView = () => {
    const params = useParams();

    const deptkey = params.deptID

    const noImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"

    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${deptkey}`


    const [artCard, setArtCard] = React.useState()
    let artArr = []

    console.log(artCard)

    React.useEffect(() => {
        const getArt = async () => {
            const response = await fetch(url)
            const data = await response.json()
            const iDs = data.objectIDs.sort(function(a, b) {
                return a - b;
            })
            console.log(iDs)
            const slicedIDs = iDs.slice(0, 5)
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
                            {console.log(obj)}
                            <Card.Img variant="top" src={obj.primaryImage ? obj.primaryImage : noImg } />
                            <Card.Title>
                                {obj.title}
                            </Card.Title>
                            <Card.Body>
                                {obj.artistDisplayName ? obj.artistDisplayName : "Unknown"}
                            </Card.Body>
                            <Card.Link href={"../artDetail/" + obj.objectID}>Detail</Card.Link>
                        </Card>
                    ))
                    setArtCard(mappedArr)
                })
            })
        };
        getArt();
    }, [url])


    return (
        <Row>
            <Col>
            <CardGroup>{artCard}</CardGroup>
            </Col>
        </Row>

    )
}

export default DeptView;