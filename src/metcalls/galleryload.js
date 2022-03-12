import Header from "../components/Header"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

const GalleryLoad = () => {
    const departments = [
        {
            departmentId: 1,
            displayName: "American Decorative Arts"
        },
        {
            departmentId: 3,
            displayName: "Ancient Near Eastern Art"
        },
        {
            departmentId: 4,
            displayName: "Arms and Armor"
        },
        {
            departmentId: 5,
            displayName: "Arts of Africa, Oceania, and the Americas"
        },
        {
            departmentId: 6,
            displayName: "Asian Art"
        },
        {
            departmentId: 7,
            displayName: "The Cloisters"
        },
        {
            departmentId: 8,
            displayName: "The Costume Institute"
        },
        {
            departmentId: 9,
            displayName: "Drawings and Prints"
        },
        {
            departmentId: 10,
            displayName: "Egyptian Art"
        },
        {
            departmentId: 11,
            displayName: "European Paintings"
        },
        {
            departmentId: 12,
            displayName: "European Sculpture and Decorative Arts"
        },
        {
            departmentId: 13,
            displayName: "Greek and Roman Art"
        },
        {
            departmentId: 14,
            displayName: "Islamic Art"
        },
        {
            departmentId: 15,
            displayName: "The Robert Lehman Collection"
        },
        {
            departmentId: 16,
            displayName: "The Libraries"
        },
        {
            departmentId: 17,
            displayName: "Medieval Art"
        },
        {
            departmentId: 18,
            displayName: "Musical Instruments"
        },
        {
            departmentId: 19,
            displayName: "Photographs"
        },
        {
            departmentId: 21,
            displayName: "Modern Art"
        }
    ]

    const [gallery, setGallery] = useState("null");

    useEffect(() => {

        const setGallery = async () => {

        }
    })



    return (
        <p1>hi</p1>
    )
}

export default GalleryLoad