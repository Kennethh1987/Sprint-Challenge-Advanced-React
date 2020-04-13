import React from 'react'

export default function SuperWoman(props) {
    return (
        <div className='superWoman'>
            <h2>{props.name}</h2>
            <p>Country: {props.country}</p>
            <p>Searches: {props.searches}</p>
        </div>
    )
}