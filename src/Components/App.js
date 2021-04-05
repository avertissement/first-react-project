import React from 'react';
import './App.css';
import List from './List.js';

function App(props) {

    const headerOnly = props.store.lists.map(list => {
        const theHeader = list.header
        const theID = list.id
        const forCardIds = list.cardIds.map(cardId => {
            const begin = props.store.allCards[cardId]
            return begin
        })
        return (
            <List key={theID} header={theHeader} cards={forCardIds} />
        )
    })

    return (
        <main className="App">
            <header className="App-header">
                <h1>Trelloyes!</h1>
            </header>
            <div className="App-list">
                {headerOnly}
            </div>
        </main>
    )
}

export default App