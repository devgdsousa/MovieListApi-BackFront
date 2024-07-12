import { useParams } from 'react-router-dom';
import "./MovieDetails.css"


type Movie = {
  id: number;
  title: string;
  imageURL: string;
  amount: number;
  describe: string;
  time_minutes: number;
};

const MovieDetails = ({ movies }: { movies: Movie[] }) => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <div>Filme não encontrado</div>;
  }

  return (
    <div className="movie-details">
     <div className='info'>
      <h1>{movie.title}</h1>
      <img src={movie.imageURL} alt={movie.title} />
      <p>{movie.describe}</p>
      <p>Tempo: {movie.time_minutes} minutos</p>
      <p>Orçamento: {movie.amount}</p>
     </div>
      
    </div>
  );
};

export default MovieDetails;
