import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Slides() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='carousel.jpg'
        alt='...'
      >
        <h5>First connect to our website</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='carousel.jpg'
        alt='...'
      >
        <h5>Second Go to Dorms in NavBar</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='carousel.jpg'
        alt='...'
      >
        <h5>Choose & Book</h5>
        <p>It is that simple.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}