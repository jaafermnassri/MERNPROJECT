// import { MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoyers, searcheFoyer } from "../../Redux/actions/foyerActions";
import { searchFoyer } from "../../Redux/actions/foyerActions";
import DormCard from "../DormCard/DormCard";

import "./dormlist.css";

const DormList = () => {
  const Adresse = [
    "GAFSA",
    "TUNIS",
    "SFAX",
    "SOUSSE",
    "GABES",
    "TOZER"
  ];
  const [search, setSearch] = useState("")
  const [adresse, setAdresse] = useState("");
  const dorms = useSelector((state) => state.foyerReducer.foyers);
  //select
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(getAllFoyers());
}, [])
const handleAdresse = (e) => {
  dispatch(searcheFoyer(e.target.value, "",""));
};

  //select
  return (
    <div>
      <div className="input-group">
        <div className="form-outline">
          <input value={search} onChange={(e) => {setSearch(e.target.value);}} type="search" id="form1" className="form-control" />
          <label className="form-label" for="form1">
            Search
          </label>
        </div>
        <button type="button"  onClick={() => {dispatch(searchFoyer(search));setSearch("")}} className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      
        <select
            className="form-select form-select-lg"
            onChange={handleAdresse}
            name="select-lawyer"
            id="select-lawyer"
          >
            <option defaultValue>GAFSA</option>
            {Adresse.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
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
