import React, { Component } from 'react';
import Country from './Country';


export class Countries extends Component {
    render() {
        const {countries } = this.props.data;
        return (
            <>
            <div className="font-weight-bold text-center">Afican Countries</div>
            {countries.map(country => (
                <Country key={country.name} country={country} data={this.props.data}/>
            ))}
            </>
        )
    }
}

export default Countries
