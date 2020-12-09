import React from 'react'
import './Bird.css'

const Bird = ({birdName,image,description,location}) => {
    return (
        <div className="bird_container">
            <div className="grid_container">
                <div className="image_container">
                    <img src={image}/>
                </div>
                <div>
                    <h4>{birdName}</h4>
                    <h4>{location}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Bird
