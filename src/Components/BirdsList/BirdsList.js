import React from 'react'
import Bird from '../Bird/Bird'
import './BirdsList.css'

const BirdsList = ({Data}) => {
    const birdData = Data.map((bird)=>{
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
