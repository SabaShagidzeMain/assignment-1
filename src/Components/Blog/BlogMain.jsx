import React from "react";
import "./BlogMain.css";
import { Link } from "react-router-dom";

const BlogMain = () => {
  return (
    <main className="main">
      <div className="blog-wrapper">
        <div className="blog-card">
          <div className="blog-card-top">
            <div className="blog-image-wrapper">
              <img
                src="src/assets/user-images/serious-man-thinking_1149-1328.avif"
                alt=""
                className="blog-image"
              />
            </div>
            <div className="blog-Username-wrapper">
              <p className="username">User 1</p>
            </div>
          </div>
          <div className="blog-card-bot">
            <p className="blog-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis exercitationem, dolor porro velit similique minima
              repellendus, saepe tempora quo dolore cumque officiis eos dicta,
              tenetur ut reiciendis quibusdam distinctio corrupti.
            </p>
            <Link to="/BlogText" className="blog-link">
              Read More...
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-card-top">
            <div className="blog-image-wrapper">
              <img
                src="src/assets/user-images/serious-man-thinking_1149-1328.avif"
                alt=""
                className="blog-image"
              />
            </div>
            <div className="blog-Username-wrapper">
              <p className="username">User 2</p>
            </div>
          </div>
          <div className="blog-card-bot">
            <p className="blog-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis exercitationem, dolor porro velit similique minima
              repellendus, saepe tempora quo dolore cumque officiis eos dicta,
              tenetur ut reiciendis quibusdam distinctio corrupti.
            </p>
            <Link to="/BlogText" className="blog-link">
              Read More...
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-card-top">
            <div className="blog-image-wrapper">
              <img
                src="src/assets/user-images/serious-man-thinking_1149-1328.avif"
                alt=""
                className="blog-image"
              />
            </div>
            <div className="blog-Username-wrapper">
              <p className="username">User 3</p>
            </div>
          </div>
          <div className="blog-card-bot">
            <p className="blog-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis exercitationem, dolor porro velit similique minima
              repellendus, saepe tempora quo dolore cumque officiis eos dicta,
              tenetur ut reiciendis quibusdam distinctio corrupti.
            </p>
            <Link to="/BlogText" className="blog-link">
              Read More...
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogMain;
