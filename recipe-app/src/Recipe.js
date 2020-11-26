import React from 'react'

function Recipe({title, calories, image, ingredients}) {
    return (
        <div className="container w-25 card mb-5">
            <img className="card-img-top pt-1" src={image} alt="Card image cap"></img>
            <div className="card-body">
                 <h5 className="card-title">{title}</h5> </div>
            <ul className="list-group list-group-flush">{ingredients.map(item => (
                <li className="list-group-item">{item.text}</li>
            ))}
            </ul>
            <p>Calories : {calories}</p>
            
            <br/>
        </div>
    )
}











export default Recipe
