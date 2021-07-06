import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      id,
      title,
      subtitle,
      imagePath,
      storyline,
      rating } = movie;
    return (
      <div data-testid="movie-card">
        <div>{ title }</div>
        <div>{ subtitle }</div>
        <img src={ imagePath } alt={ `imagem do filme ${title}` } />
        <div>{ storyline }</div>
        <div>{ rating }</div>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>

// id: 1,
// title: 'Kingsglaive',
// subtitle: 'Final Fantasy XV',
// storyline: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
// rating: 4.5,
// imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
// bookmarked: true,
// genre: 'action',
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
