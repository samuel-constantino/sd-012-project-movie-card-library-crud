import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };

    this.setMovie = this.setMovie.bind(this);
  }

  componentDidMount() {
    this.setMovie();
  }

  async setMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;

    const currentMovie = await getMovie(id);
    this.setState({
      movie: currentMovie,
      loading: false,
    });
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const { movie, loading } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      loading ? <Loading>Carregando...</Loading> : (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h2>{ `Title: ${title}` }</h2>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      )
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
