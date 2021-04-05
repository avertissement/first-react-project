import React from 'react';
import './List.css';
import Card from './Card.js';

function List(props) {

    const intermediate = props.cards.map(card => {
        const cardContent = card.content
        const cardTitle = card.title
        return (
            <Card title={cardTitle} content={cardContent} />
        )
    })

    return (
        <section className="List">


            <header className="List-header">
                <h2>{props.header}</h2>
            </header>

            <div className="List-cards">
                {intermediate}
            <button type="button" className="List-add-button"> + Add Random Card</button>
            </div>


        </section>
    )
}

export default List