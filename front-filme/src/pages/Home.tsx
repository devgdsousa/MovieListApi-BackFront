import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import "./Home.css"

type Filme = {
  id: number;
  title: string;
  imageURL: string;
  amount: number;
  describe: string;
  time_minutes: number;
};

const Home = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/filme")
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar filmes');
        }
        return response.json();
      })
      .then(data => {
        setFilmes(data);
      })
      .catch(error => {
        console.error('Erro ao buscar filmes:', error);
      });
  }, []);

  return (
    <div className='movies-container'>
      <MovieList movies={filmes} />
    </div>
  );
};

export default Home;
