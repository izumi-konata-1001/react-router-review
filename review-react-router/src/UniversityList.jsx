import React from 'react';
import './css/UniversityList.css';
import UniversitySquare from './Component/UniversitySquare';
import { SlMagnifier } from "react-icons/sl";

function UniversityList() {
  return (
    <div className="UniversityListContainer">
      <p className="UniversityTitle">Universities</p>
      <div className="SearchUniArea">
        <input className="SearchUni"></input>
        <button className="SearchUniButton">
            <SlMagnifier />
        </button>
      </div>
      <div className="UniversityGrid">
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
        <UniversitySquare />
      </div>
    </div>
  );
}

export default UniversityList;