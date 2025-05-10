import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import Upcoming from './pages/Upcoming'
import SearchResults from './pages/SearchResults'
import MovieDetailsPage from './pages/MovieDetails'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Popular} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/search/:query" component={SearchResults} />
          <Route path="/movie/:movieId" component={MovieDetailsPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
