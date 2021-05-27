import { Container } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div>
      <Container className="movieList">
        {movies.map((movie) => (
          <MovieCard key={movie.id} mCard={movie} />
        ))}
      </Container>
    </div>
  );
};

export default MovieList;
