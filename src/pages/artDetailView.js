import React from "react"
import { useParams } from "react-router-dom"
import AddComment from "../components/commentform"


const ArtDetail = (props) => {
    const userData = props.user
    const setUserId = userData.user
    console.log(setUserId)

    const params = useParams();
    console.log(params)
    const iD = params.objectID

    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${iD}`

    const [userCredentials, setUserCredentials] = React.useState('')
    const [artDetail, setArtDetail] = React.useState("null")
    console.log(artDetail)

    React.useEffect(() => {

        const getArtDetail = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setArtDetail(data);
        }
        getArtDetail();
    }, [])

    const loaded = () => {
        return (
            <div>
                <h1>{artDetail.title}</h1>
                <AddComment user={setUserId} art={artDetail} />
            </div>
        )
    }

    const loading = () => {
        return <h1>loading...</h1>
    }

    return artDetail ? loaded() : loading()
}

export default ArtDetail;