import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
const moment = require("moment");

export const AffectedStateDetails = ({ value }) => {
  const selectDate = moment();
  let newDate = selectDate.format("M-DD-YYYY");
  const [startDate, setStartDate] = useState(newDate);
  const [affectedStateDetails, setAffectedStateDetails] = useState([
    {
      provinceState: "ak",
      confirmed: 2,
      deaths: 0,
    },
  ]);

  useEffect(() => {
    setAffectedStates(newDate);
  }, []);

  let setAffectedStates = (changeDate) => {
    fetch(`https://covid19.mathdro.id/api/daily/${changeDate}`)
      .then((res) => res.json())
      .then((data) => {
        let arr = data.filter((obj) => obj.countryRegion == value);
        setAffectedStateDetails(arr);
      })
      .catch((err) => alert(err));
  };
  console.log(affectedStateDetails);

  let onChangeDate = (date) => {
    let changeDate = moment(date).format("M-DD-YYYY");
    setStartDate(changeDate);
    setAffectedStates(changeDate);
  };

  return (
    <section className="affected-states">
      <div className="container">
        <div className="state-headings">
          <h1 className="heading-primary">Affected States</h1>
          <DatePicker
            value={startDate}
            onChange={(date) => onChangeDate(date)}
          />
        </div>

        <div className="parent-card">
          {affectedStateDetails.map((doc, index) => {
            return (
              <div className="card">
                <i className="fas fa-street-view fa-3x"></i>
                <span className="state-name">
                  {doc.provinceState ? doc.provinceState : doc.countryRegion}
                </span>
                <span className="heading-secondary">
                  Confirmed
                  <i className="fas fa-arrow-circle-up"></i>
                </span>
                <span className="state-count">{doc.confirmed}</span>
                <span className="heading-secondary">
                  Deaths
                  <i className="fas fa-arrow-circle-down"></i>
                </span>
                <span className="state-count">{doc.deaths}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
