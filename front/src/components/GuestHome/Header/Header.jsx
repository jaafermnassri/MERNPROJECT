import React from "react";
import "./header.css"
// components



export default function Header() {
  return (
    <>
      <header className="bg-dark py-5">
  <div className="container px-5">
    <div className="row gx-5 justify-content-center">
      <div className="col-lg-6">
        <div className="text-center my-6">
          <h1 className="display-5 fw-bolder text-white mb-2">The Official website where students can book for their University's Dorm</h1>
          <p className="lead text-white-50 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius veniam, iure modi blanditiis dolorum libero saepe, culpa tenetur ad voluptate voluptas aspernatur consectetur sint eligendi ipsam eveniet ipsa debitis vero?</p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center"><a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a></div>
        </div>
      </div>
    </div>
  </div>
</header>

    </>
  );
}