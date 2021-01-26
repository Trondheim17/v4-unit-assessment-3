import React from 'react'

function Shelf(props) {
    let mappedTitles = props.shelfArray.map((book) => {
        return (
            <div key={book}>
                <span>{book}</span>
            </div>
        )
    })
    return (
        <div>
            <button onClick={() => props.clearShelf()}> Clear Shelf </button>
            <div>{mappedTitles}</div>
        </div>
    )
}

export default Shelf