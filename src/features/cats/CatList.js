import React from "react"
import { useSelector } from "react-redux"

const CatList = ({ catPics = [] }) => {

    const isLoading = useSelector(state => state.status === "loading")

    const displayCatPics = catPics.map(pic => {
        return (
            <img key={pic.id} src={pic.url} alt="cat" />
        )
    })

    return (
        <div>
            {isLoading ? <p>Loading...</p> : displayCatPics}
        </div>
    )
}

export default CatList