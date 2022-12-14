import React, { useState } from 'react'
import "./testimonial.css"
import data from "./data"
const Testimonial = () => {

  const [comments, setComments] = useState(data);
  return (
    <div>
        <section className="py-5 border-bottom">
          
  <div  className="container px-5 my-5 px-5">
    <div className="text-center mb-5">
      <h2 className="fw-bolder">Customer testimonials</h2>
      <p className="lead mb-0">Our customers love working with us</p>
    </div>
    <div className="row gx-5 justify-content-center">
    
      <div  className="col-lg-6" >
        {/* Testimonial 1*/}
        {comments.map((comment)=> (
        <div  className="card mb-4 coment" comment={comment}>
          <div className="card-body p-4">
            <div className="d-flex">
              <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1" /></div>
              <img className='pic' src={comment.pic} alt="Avatar"></img>
              <div className="ms-4">
                <p className="mb-1">{comment.comment}</p>
                <div className="small text-muted">- {comment.author}, Location</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
       
    </div>
  </div>
 
</section>

    </div>
  )
}

export default Testimonial