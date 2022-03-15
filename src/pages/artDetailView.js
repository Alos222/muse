import React from "react"
import { useParams } from "react-router-dom"
import AddComment from "../components/commentform"
import {Col, Row, Container, Card} from 'react-bootstrap'


const ArtDetail = (props) => {
    const userData = props.user
    console.log(userData)
    const setUserId = userData.user
    console.log(setUserId)

    const params = useParams();
    console.log(params)
    const iD = params.objectID

    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${iD}`

    const [artDetail, setArtDetail] = React.useState("null")
    console.log(artDetail)

    React.useEffect(() => {

        const getArtDetail = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setArtDetail(data);
            console.log(data)
        }
        getArtDetail();
    }, [url])

    const loaded = () => {
        return (
            <Container>
                <Row>
                <Col md={12}>
                <Card style={{ width: '100%' }}>
                <Card.Img className="artDetailCard" src={artDetail.primaryImage}/>
                <Card.Body>
                <h3>{artDetail.title}</h3>
                    <Row className="artDetailDes">
                    <Col md={8}>
                    <h6>Artist Name</h6>
                    <p>{artDetail.artistDisplayName ? artDetail.artistDisplayName : "Unknown"}</p>
                    <h6>Artist Bio</h6>
                   <p>{artDetail.artistDisplayBio ? artDetail.artistDisplayName: "Not available"}</p>
                    </Col>
                    <Col md={4}>
                    <h6>Object Name</h6>
                    <p>{artDetail.objectName ? artDetail.objectName : " "}</p>
                    <h6>Culture</h6>
                    <p>{artDetail.culture ? artDetail.culture : "Unknown"}</p>
                    <h6>Date</h6>
                    <p>{artDetail.objectDate}</p>
                    </Col>
                    </Row>
                </Card.Body>
                </Card>
                <div>
                <h3>Comments</h3>
                </div>
         
                <Card> 
                <AddComment user={setUserId} art={artDetail}/>
                </Card>
                </Col>
                </Row>
            </Container>
        )
    }

    const loading = () => {
        return <h1>loading...</h1>
    }

    return artDetail ? loaded() : loading()
}

export default ArtDetail;