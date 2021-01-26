import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
        }

        this.handleClear = this.handleClear.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(value) {
        this.setState({ userInput: value })
    }

    handleClick() {
        this.props.filterBooks(this.state.userInput)
    }

    handleClear() {
        this.props.reset()
        this.setState({ userInput: '' })
    }


    render() {
        return (
            <div className='search'>
                <input value={this.state.userInput} placeholder='Search Books by Title' onChange={e => this.handleChange(e.target.value)} />
                <button onClick={this.handleClick}>Search</button>
                <button onClick={this.handleClear}>Clear Search</button>
            </div>
        )
    }
}

export default SearchBar