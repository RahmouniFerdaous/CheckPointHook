import React, { useState } from "react";
import {Modal,Button,Form,InputGroup,FormControl
} from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { v4 as uuidv4 } from "uuid";

const AddMovie = ({show,handleClose,addMovieFunc }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
  });

  const HandleOnChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const [rating, setRating] = useState(0);

  const onStarClick = (value) => {
    setRating(value);
  };

  return (
    <div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <InputGroup size="lg">
            <InputGroup.Prepend>
              <InputGroup.Text id="title">Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="title"
              onChange={HandleOnChange}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Description</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              name="description"
              onChange={HandleOnChange}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Prepend style={{ marginRight: "120px" }}>
              <InputGroup.Text>Rating</InputGroup.Text>
            </InputGroup.Prepend>
            <StarRatingComponent
              name={"rating"} /* name of the radio input, it is required */
              value={
                rating
              } /* number of selected icon (`0` - none, `1` - first) */
              starCount={5} /* number of icons in rating, default `5` */
              onStarClick={onStarClick}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Poster URL</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              name="posterURL"
              onChange={HandleOnChange} 
            />
          </InputGroup> 
          <img 
            variant="top"
            src={movie.posterURL}
            style={{
              widht: "120px",
              height: "100px",
              marginTop: "0.7cm",
              marginLeft:"3.5cm"
            }}
          />
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addMovieFunc({ ...movie,  id: uuidv4(), rating })}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
