// import { MDBInput } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoyers } from "../../Redux/actions/foyerActions";
import DormCard from "../DormCard/DormCard";

import "./dormlist.css";

const DormList = () => {

  const dorms = useSelector((state) => state.foyerReducer.foyers);
  //select
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(getAllFoyers());
}, [])

  //select
  return (
    <div>
      <div className="input-group">
        <div className="form-outline">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" for="form1">
            Search
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div
        style={{
          display: "flex",

          margin: 10,
          flexWrap: "wrap",
        }}
      >
        {dorms.map((dorm) => (
          <DormCard dorm={dorm} key={dorm._id} />
        ))}
      </div>
    </div>
  );
};

export default DormList;
