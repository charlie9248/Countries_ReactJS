import React, { Component } from "react";

export class CountryInfo extends Component {
  render() {
    const { country } = this.props.data;
    const {
      flag,
      languages,
      currencies,
      name,
      capital,
      population,
      subregion,
    } = country;

    console.log(languages);
    return (
      <div>
        <h4>{name}</h4>
        <img
          src={flag}
          alt="loading"
          style={{ width: "10rem", height: "10rem" }}
        />
        <hr />
        <p>
          <strong>
            <i>General Information :</i>
          </strong>
          {name} is a country on the {subregion} {}
          of the African continent, marked by several distinct ecosystems , with
          population of {population}
        </p>
        <hr />
        <p className="lead text-muted">Capital City</p>
        {capital}
        <hr />
        <p className="lead text-muted">Currency</p>

        {currencies &&
          currencies.map((currency, i) => (
            <p id="line" key={i}>
              {currency.name}
            </p>
          ))}

        <p className="lead text-muted">Language</p>

        {languages &&
          languages.map((language, i) => (
            <p id="line" key={i}>
              {language.name}
            </p>
          ))}
      </div>
    );
  }
}

export default CountryInfo;
