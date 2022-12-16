import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
// components



export default function HeaderCopy() {
  return (
    <>
   
      <header className="bg-dark py-5 ">
      <div className="container px-5 my-5">
    <div className="row gx-5">
      <div className="col-lg-4 mb-5 mb-lg-0">
        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection" /></div>
        <h2 className="display-5 fw-bolder text-white mb-2">1-Connect Yourself</h2>
        <p className="lead text-white-50 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate itaque, minima ratione consectetur porro eum repellat tempore laudantium esse eaque neque deleniti numquam molestias! Ullam aperiam voluptatibus omnis nemo porro.</p><a className="text-decoration-none" href="#!"><Link to="/register">Try now</Link><i className="bi bi-arrow-right" /></a>
      </div>
      <div className="col-lg-4 mb-5 mb-lg-0">
        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building" /></div>
        <h2 className="display-5 fw-bolder text-white mb-2">2-Go to Dorms List</h2>
        <p className="lead text-white-50 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate itaque, minima ratione consectetur porro eum repellat tempore laudantium esse eaque neque deleniti numquam molestias! Ullam aperiam voluptatibus omnis nemo porro.</p><a className="text-decoration-none" href="#!"><Link to="/dormlist">Try now</Link><i className="bi bi-arrow-right" /></a>
      </div>
      <div className="col-lg-4">
        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2" /></div>
        <h2 className="display-5 fw-bolder text-white mb-2">3-Choose & Book</h2>
        <p className="lead text-white-50 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate itaque, minima ratione consectetur porro eum repellat tempore laudantium esse eaque neque deleniti numquam molestias! Ullam aperiam voluptatibus omnis nemo porro.</p><a className="text-decoration-none" href="#!"><i className="bi bi-arrow-right" /></a>
      </div>
    </div>
  </div>
</header>


    </>
  );
}