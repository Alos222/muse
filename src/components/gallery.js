import React from "react"
import { useParams } from "react-router-dom";

const Gallery = (props) => {
    //Api URL
    const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects"
    //State to hold the Artwork Data
    const [art, setArtwork] = React.useState("null");

    //useEffect to run getArtwork when component mounts
    React.useEffect(() => {
        
        const getArtwork = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setArtwork(data);
        };
        getArtwork();
    }, [url]);

    //load function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>
                    {art.total}
                </h1>
            </div>
        );
    };

    //Function for when data doesn't exist 
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return art ? loaded() : loading();
}

export default Gallery