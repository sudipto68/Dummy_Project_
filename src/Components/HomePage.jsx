import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Post from "./Post";

const HomePage = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <>
      <Container>
        <div className="row my-3 mx-2 post">
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default HomePage;
