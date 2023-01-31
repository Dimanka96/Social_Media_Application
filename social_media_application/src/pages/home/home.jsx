import React from "react";
import Posts from "../../components/posts/posts";
import Stories from "../../components/stories/stories";
import "./home.css";
const Home = () => {
    return (
      <div className="home">
       <Stories></Stories>
       <Posts></Posts>
      </div>
    );
  };
  
  export default Home;