import React from "react";
import { Container } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const Filter = ({ handleChangeInput, handleChangeRating }) => {
  return (
    <div>
      <Container className="Navbar">
        <input
          type="text"
          placeholder="Movie Title"
          name="title"
          onChange={(event) => handleChangeInput(event)}
        ></input>
        <StarRatingComponent
          name={"rating"} /* name of the radio input, it is required */ 
          starCount={5} /* number of icons in rating, default `5` */
          onStarClick={(value) => handleChangeRating(value)}
        />
      </Container>
    </div>
  );
};

export default Filter;
