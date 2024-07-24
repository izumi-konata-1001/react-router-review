import React from 'react';
import './css/Home.css';
import { SlMagnifier } from "react-icons/sl";

function Home() {
  return (
    <div className="HomeContainer">
        <div className="SearchContainer">
            <div className="InputTitle">
            Search Your University:
            </div>
            <div style={{ position: 'relative' }}>
            <input className="SearchUniInput" type="text" />
            <button className="SearchButton">
                <SlMagnifier />
            </button>
            </div>
        </div>
    </div>
  );
}

export default Home;