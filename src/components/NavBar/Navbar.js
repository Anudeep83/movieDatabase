import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
    }
  }

  handleInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  handleSearch = () => {
    const {searchInput} = this.state
    if (searchInput.trim() !== '') {
      this.props.history.push(`/search/${searchInput}`)
      this.setState({searchInput: ''})
    }
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSearch()
    }
  }

  render() {
    const {searchInput} = this.state

    return (
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-title">
            <h1>movieDB</h1>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Popular
          </Link>
          <Link to="/top-rated" className="nav-link">
            Top Rated
          </Link>
          <Link to="/upcoming" className="nav-link">
            Upcoming
          </Link>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchInput}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            className="search-input"
          />
          <button onClick={this.handleSearch} className="search-button">
            Search
          </button>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
