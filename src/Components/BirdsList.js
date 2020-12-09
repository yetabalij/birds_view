import React from 'react'
import Bird from './Bird'

const BirdsList = ({Data}) => {
    const birdData = Data.map((bird)=>{
        {
            return (
                <Bird key={bird.id} {...bird}/>
            )
        }
    })
    return (
        <div>
            {birdData}
        </div>
    )
}

export default BirdsList
