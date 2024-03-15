import React from 'react'
import "./Cards.css"
const Cards = (props) => {
    return (
        <div className='card' style={{ overflow: "hidden" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkBnAbYjhpOmO-yyUGRks56CeoZAnbFySaw&usqp=CAU" alt="" width={333} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Cards
