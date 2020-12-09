import React from 'react'
import Bird from '../Bird/Bird'
import './BirdsList.css'

const BirdsList = ({birdsData}) => {
    const birdData = birdsData.map((bird)=>{
        {
            return (
                <Bird key={bird.id} {...bird}/>
            )
        }
    })
    return (
        <div className="birds_list_container">
            {birdData}
        </div>
    )
}

export default BirdsList
