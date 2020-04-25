import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

export const CountryDetails = ({ value }) => {
  const [countryDetails, setCountryDetails] = useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  });

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/${value}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryDetails({
          confirmed: data.confirmed.value,
          recovered: data.recovered.value,
          deaths: data.deaths.value,
        });
      })
      .catch((err) => alert(err));
  }, [value]);

  console.log(countryDetails);
  return (
    <section className="country-details">
      <div className="container">
        <h1 className="heading-primary">Country Details</h1>
        <div className="parent-card">
          <div className="card">
            <i className="fas fa-viruses fa-2x"></i>
            <CountUp start={0} end={countryDetails.confirmed}>
              {({ countUpRef }) => <h3 className="count" ref={countUpRef}></h3>}
            </CountUp>
            <span className="heading-secondary">Confirmed</span>
          </div>
          <div className="card">
            <i className="fas fa-virus-slash fa-2x"></i>
            <CountUp start={0} end={countryDetails.recovered}>
              {({ countUpRef }) => <h3 className="count" ref={countUpRef}></h3>}
            </CountUp>
            <span className="heading-secondary">Recovered</span>
          </div>
          <div className="card">
            <i className="fas fa-user-minus fa-2x"></i>
            <CountUp start={0} end={countryDetails.deaths}>
              {({ countUpRef }) => <h3 className="count" ref={countUpRef}></h3>}
            </CountUp>
            <span className="heading-secondary">Deaths</span>
          </div>
        </div>
      </div>
    </section>
  );
};
