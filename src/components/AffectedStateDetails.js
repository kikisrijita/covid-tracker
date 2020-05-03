import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
const moment = require("moment");

export const AffectedStateDetails = ({ value }) => {
  let newDate = moment().format("M-DD-YYYY");
  const [startDate, setStartDate] = useState(newDate);
  const [affectedStateDetails, setAffectedStateDetails] = useState([
    {
      provinceState: "ak",
      confirmed: 2,
      deaths: 0,
    },
  ]);

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/daily/${startDate}`)
      .then((res) => res.json())
      .then((data) => {
        let arr = data.filter((obj) => obj.countryRegion == value);
        if (arr.length === 0) {
          setAffectedStateDetails([
            {
              provinceState: "Still no cases",
              confirmed: "No confirmed cases",
              deaths: "No Death cases",
            },
          ]);
        } else {
          setAffectedStateDetails(arr);
        }
      })
      .catch((err) => alert(err));
  }, [value, startDate]);

  console.log(affectedStateDetails);

  let onChangeDate = (date) => {
    let changeDate = moment(date).format("M-DD-YYYY");
    setStartDate(changeDate);
  };

  return (
    <section className="affected-states">
      <div className="container">
        <div className="state-headings">
          <h2 className="heading-primary">
            Choose dates to see affected states / country details:
          </h2>
          <DatePicker
            selected={new Date(startDate)}
            className="date-picker"
            value={startDate}
            onChange={(date) => onChangeDate(date)}
          />
        </div>

        <div className="parent-card">
          {affectedStateDetails.map((doc, index) => {
            console.log("test", index);
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
