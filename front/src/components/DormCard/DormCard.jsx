import React from 'react';
import { Link } from 'react-router-dom';
import ForDirector from '../private/ForDirector';
import ForStudent from '../private/ForStudent';
import "./dormcard.css"

export default function DormCard({dorm}) {
  return (
  <>
   <div className="col-md-4">
  <div className="profile-card-6"><img src={dorm.image} className="img img-responsive" />
    <div className="profile-name">{dorm.fullname}</div>
    <div className="profile-position">Lorem Ipsum Donor</div>
    <div className="profile-overview">
      <div className="profile-overview">
        <div className="row text-center">
          <div className="col-xs-4">
          <ForStudent><Link to={`/${dorm._id}`}>MORE</Link></ForStudent>
          <ForDirector><Link to={`/dash/${dorm._id}`}>DETAILS</Link></ForDirector>
          </div>
          {/* <div className="col-xs-4">
          <Link to={`/book/${dorm._id}`}>Book Now</Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>


  </>
  );
}