import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.changeMovies = this.setMovies.bind(this);
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    const movieList = await getMovies();
    this.setMovies(movieList);
  }

  setMovies(movieList) {
    this.setState({
      movies: movieList,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        { loading ? <Loading>Carregando...</Loading> : (
          <section>
            <div>
              <Link to="/movies/new">ADICIONAR CARTÃO</Link>
            </div>
            { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
          </section>
        )}
      </div>
    );
  }
}

export default MovieList;
