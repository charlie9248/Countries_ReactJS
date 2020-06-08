import React, { Component } from 'react';
import Countries from './components/Countries'
import CountryInfo from './components/CountryInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Consumer} from './Context'
import './App.css'

export class App extends Component {
  render() {
    return (
      <Consumer>
        {data =>{
          return(
            <div className="container my-4">
            <div className="row">
              <div id="countries" className="col-10 mx-auto col-md-4">
                <Countries data={data}/>
              </div>
              <div className="col-10 mx-auto col-md-8 mr-4">
                <CountryInfo data={data}/>
              </div>
            </div>
          </div>
          )
        }}
      </Consumer>
    )
  }
}

export default App
