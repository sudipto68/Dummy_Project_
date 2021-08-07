import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { title, body, id } = props.post;
  return (
    <>
      <div className="col-md-4 col-sm-6 my-4 d-flex justify-content-center">
        <Card
          style={{ width: "19rem", border: "none" }}
          className="shadow post-card"
        >
          <Card.Body>
            <Link to={`post/${id}`}>
              <img
                src="https://images.pexels.com/photos/7245226/pexels-photo-7245226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="icon"
                className="img"
              />
            </Link>
            <Card.Title className="mt-2 fw-bold text-center">
              {title.slice(0, 10)}
            </Card.Title>
            <Card.Text className="text-justify">{body}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Post;
