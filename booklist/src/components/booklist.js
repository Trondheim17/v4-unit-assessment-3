import React from 'react'

function Books(props) {
    let mappedbooks = props.books.map((book) => {
        return (
            <div key={book.id} className='eachBook' >
                <img alt='book cover' src={book.img} width='90px' onClick={() => props.addBook(book.title)} />
                <span>{`${book.title}`}</span>
                <span>{book.author}</span>
            </div>
        )
    })
    return (
        <div className='bookList'>{mappedbooks}</div>
    )
}

export default Books