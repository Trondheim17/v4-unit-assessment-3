import './App.css';
import { Component } from 'react';
import Header from './components/header'
import Books from './components/booklist'
import Shelf from './components/shelf'
import data from './data'
import SearchBar from './components/searchBar'

class App extends Component {
  constructor() {
    super()

    this.state = {
      books: data,
      shelf: [],
    }

    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  addToShelf(title) {
    console.log('hit addToShelf')
    this.setState({ shelf: [...this.state.shelf, title]})
  }

  clearShelf() {
    this.setState({ shelf: [] })
  }

  filterBooks(input) {
    console.log('hit filterBooks')
    let filteredBooks = this.state.books.filter((book) => book.title.includes(input)) 
    this.setState ({ books: filteredBooks })
  }

  reset() {
    this.setState({ books: data })
  }


  render() {
    const { books, shelf } = this.state
    return (
      <div className="App">
        <Header title='booklist' />
        <div className='container1'>
          <Books books={books} addBook={this.addToShelf} />
          <div>
            <SearchBar filterBooks={this.filterBooks}  reset={this.reset}/>
            <Shelf shelfArray={shelf} clearShelf={this.clearShelf} />
          </div>
        </div>
      </div>
    )
  };
}

export default App;
