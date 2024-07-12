import MovieCard from './MovieCard';
import "./MovieList.css"

type Movie = {
  id: number;
  title: string;
  imageURL: string;
  vote_average: number;
}[];

type MovieListProps = {
  movies: Movie;
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
