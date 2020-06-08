import React, { Component } from "react";

export class Country extends Component {
  render() {
    const { flag, name, capital, area } = this.props.country;
    const { findCountry } = this.props.data;
    return (
      <div>
        <hr />
        <div
          id="country-div"
          onClick={() => findCountry(area)}
          className="d-flex"
        >
          <img className="img-country" src={flag} alt="loading" />
          <div className="d-block">
            <p className="ml-3">
              <strong>{name}</strong>{" "}
            </p>
            <p className="ml-3">{capital}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Country;
