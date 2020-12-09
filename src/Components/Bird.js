import React from 'react'

const Bird = ({birdName,image,description,location}) => {
    return (
        <div>
            <img src={image}/>
            <h4>{birdName}</h4>
            <h4>{location}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Bird
