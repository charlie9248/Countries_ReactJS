import React, { Component } from 'react';
import axios  from 'axios'

const Context = React.createContext();


export class Provider extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             countries : [],
             country : {},
        }
    }


    componentDidMount = () =>{
        axios.get(`https://restcountries.eu/rest/v2/region/africa`)
        .then(res =>{
            this.setState({
                countries : res.data,
                country : res.data[0]
            })
        })
        .catch(err => {
            console.log(err.data)
        });
    }


    findCountry =  area => {
        const selectedCountry = this.state.countries.find(country => country.area === area);
        console.log(selectedCountry);
        this.setState({
            country : selectedCountry,
        });
    }
    

    render() {
        console.log(this.state)
        return (
            <Context.Provider value={{
                ...this.state,
                findCountry : this.findCountry,
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export  const Consumer = Context.Consumer 
