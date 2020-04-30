import React, { useState, useEffect } from "react";
import { CountryDetails } from "./CountryDetails";
import { AffectedStateDetails } from "./AffectedStateDetails";

export const Header = () => {
  const [countryData, setCountryData] = useState([]);
  const [countryName, setCountryName] = useState("Afghanistan");

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data.countries);
      })
      .catch((err) => alert(err));
  }, []);

  let handleChange = (e) => {
    e.preventDefault();
    setCountryName(e.target.value);
  };

  return (
    <React.Fragment>
      <nav className="main-nav">
        <div className="container wrapper">
          <div>
            <i className="far fa-chart-bar fa-2x"></i>
            <span className="logo-name">
              <span className="logo-c">C</span>
              <i className="fas fa-virus fa-1x"></i>vid-19
              <span className="logo-c">t</span>racker
            </span>
          </div>
          <select
            className="country-select"
            id="country"
            onChange={handleChange}
          >
            {countryData.map((doc, index) => {
              return (
                <option key={index} value={doc.name}>
                  {doc.name}
                </option>
              );
            })}
          </select>
        </div>
      </nav>
      <CountryDetails value={countryName} />
      <AffectedStateDetails value={countryName} />
    </React.Fragment>
  );
};
