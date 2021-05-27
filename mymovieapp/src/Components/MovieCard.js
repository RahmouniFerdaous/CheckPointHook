import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ mCard }) => {
  return (
    <div>
      <CardDeck style={{ paddingLeft: "0.3cm" }}>
        <Card>
          <Card.Img
            style={{ widht: "360.938px", height: "481.250px" }}
            variant="top"
            src={mCard.posterURL}
          />
          <Card.Body>
            <Card.Title>{mCard.title}</Card.Title>
            <Card.Text>{mCard.description}</Card.Text>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Button variant="success" size="lg">
                {" "}
                Watch{" "}
              </Button>
              <Button variant="warning" size="lg">
                {" "}
                Download{" "}
              </Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <StarRatingComponent
              name={"rating"} /* name of the radio input, it is required */
              value={
                mCard.rating
              } /* number of selected icon (`0` - none, `1` - first) */
              starCount={5} /* number of icons in rating, default `5` */
            />
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default MovieCard;
