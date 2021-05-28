import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  // movies state an array of objects
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Interstellar",
      description:
        "In the near future, the Earth is less and less welcoming to humanity which is experiencing a serious food crisis. The film chronicles the adventures of a group of explorers who use a recently discovered rift in space-time to push human limits and set off to conquer astronomical distances on an interstellar journey.",
      posterURL: "/Intersteller.jpg",
      rating: 4,
    },
    {
      id: uuidv4(),
      title: "Kingdom Of Heaven",
      description:
        "Somewhere in the kingdom of France in 1186, Balian, a young blacksmith overwhelmed by existence, learns that he is the son of Godefroy d Ibelin. But this noble line forced him to go to the Holy Land to defend reconquered Jerusalem. Once in Palestine, he was introduced to the art of war and political intrigue, with the help of Tiberias, the king s powerful military adviser.",
      posterURL: "/KingdomOfHeaven.jpg",
      rating: 3,
    },
    {
      id: uuidv4(),
      title: "Exorcism Of Emily Rose",
      description:
        "Convinced of being possessed by the devil, a young student calls on a priest to exorcise her. But during this fight, the young girl is killed and the priest is then accused of homicide. The latter then finds himself at the heart of a trial which will shake the convictions of all.",
      posterURL: "/ExcorcismOfEmilyRose.jpg",
      rating: 2,
    },
  ]);
  // show is a state that show the addMovie component
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  //add movie fct as props to the add movie component with param (...movie)
  function addMovieFunc(newobj) {
    setMovies([...movies, newobj]);
  }
  //new state for the input filter
  const [searchMovie, setSearchMovie] = useState("");
  const handleChangeInput = (event) => {
    setSearchMovie(event.target.value);
    console.log(searchMovie)
  };
  //new state for the ratingfilter
  const [searchRatingMovie, setSearchRatingMovie] = useState(1);
  const handleChangeRating = (value) => {
    setSearchRatingMovie(value);
    console.log(searchRatingMovie)
  };
  return (
    <div className="App">
      <Filter
        handleChangeInput={handleChangeInput}
        handleChangeRating={handleChangeRating}
      />
      <br />
      <MovieList
        movies={movies.filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .includes(searchMovie.toLowerCase().trim()) &&
            movie.rating >= searchRatingMovie
        )}
        addMovieFunc={addMovieFunc}
        searchMovie={searchMovie}
        searchRatingMovie={searchRatingMovie}

      />
      <br />
      <Button
        onClick={handleShow}
        style={{ marginBottom: "0.7cm" }}
        variant="info"
      >
        Add Movie
      </Button>
      {show && <AddMovie addMovieFunc={addMovieFunc} />}
    </div>
  );
}

export default App;
