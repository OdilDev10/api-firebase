import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './Blog.css'


export const Blog = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <h2 className="title text-center mi-background-verde">Blog</h2>
        <div className="container-fluid mi-background">

<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://cdn.akamai.steamstatic.com/store/home/store_home_share.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>




        </div>
      </div>
      <Footer />
    </div>
  );
};
