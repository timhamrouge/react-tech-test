import React, { Component} from "react";
import {hot} from "react-hot-loader";
import axios from "axios";
import Form from './components/Form';
import DataView from './components/DataView';
import "./App.css";

class App extends Component{
    state = {
        addresses: [],
        submitted: false,
        leadData: {}
    }

  render(){
    //   console.log(this.state)
    return(
      <div className="App">
        {!this.state.submitted ? <Form
        lookupAddresses={this.lookupAddresses}
        addresses={this.state.addresses}
        setLeadData={this.setLeadData}
        /> :
        <DataView
        leadData={this.state.leadData}
        />}
      </div>
    );
  }



  lookupAddresses = (postcode) => {

    // console.log(postcode);

    //mocked postcode data so i don't use up all my api calls, this is where Axios would live 
     const addresses = [
        "Apartment 100, 2 Advent Way, , , , Manchester, ",
        "Apartment 101, 2 Advent Way, , , , Manchester, ",
        "Apartment 102, 2 Advent Way, , , , Manchester, ",
        "Apartment 103, 2 Advent Way, , , , Manchester, ",
        "Apartment 104, 2 Advent Way, , , , Manchester, ",
        "Apartment 105, 2 Advent Way, , , , Manchester, ",
        "Apartment 106, 2 Advent Way, , , , Manchester, ",
        "Apartment 107, 2 Advent Way, , , , Manchester, ",
        "Apartment 108, 2 Advent Way, , , , Manchester, ",
        "Apartment 43, 2 Advent Way, , , , Manchester, ",
        "Apartment 45, 2 Advent Way, , , , Manchester, ",
        "Apartment 64, 2 Advent Way, , , , Manchester, ",
        "Apartment 65, 2 Advent Way, , , , Manchester, ",
        "Apartment 66, 2 Advent Way, , , , Manchester, ",
        "Apartment 67, 2 Advent Way, , , , Manchester, ",
        "Apartment 68, 2 Advent Way, , , , Manchester, ",
        "Apartment 69, 2 Advent Way, , , , Manchester, ",
        "Apartment 70, 2 Advent Way, , , , Manchester, ",
        "Apartment 71, 2 Advent Way, , , , Manchester, ",
        "Apartment 72, 2 Advent Way, , , , Manchester, ",
        "Apartment 73, 2 Advent Way, , , , Manchester, ",
        "Apartment 74, 2 Advent Way, , , , Manchester, ",
        "Apartment 75, 2 Advent Way, , , , Manchester, ",
        "Apartment 76, 2 Advent Way, , , , Manchester, ",
        "Apartment 77, 2 Advent Way, , , , Manchester, ",
        "Apartment 78, 2 Advent Way, , , , Manchester, ",
        "Apartment 79, 2 Advent Way, , , , Manchester, ",
        "Apartment 80, 2 Advent Way, , , , Manchester, ",
        "Apartment 81, 2 Advent Way, , , , Manchester, ",
        "Apartment 82, 2 Advent Way, , , , Manchester, ",
        "Apartment 83, 2 Advent Way, , , , Manchester, ",
        "Apartment 84, 2 Advent Way, , , , Manchester, ",
        "Apartment 85, 2 Advent Way, , , , Manchester, ",
        "Apartment 86, 2 Advent Way, , , , Manchester, ",
        "Apartment 87, 2 Advent Way, , , , Manchester, ",
        "Apartment 88, 2 Advent Way, , , , Manchester, ",
        "Apartment 89, 2 Advent Way, , , , Manchester, ",
        "Apartment 90, 2 Advent Way, , , , Manchester, ",
        "Apartment 91, 2 Advent Way, , , , Manchester, ",
        "Apartment 92, 2 Advent Way, , , , Manchester, ",
        "Apartment 93, 2 Advent Way, , , , Manchester, ",
        "Apartment 94, 2 Advent Way, , , , Manchester, ",
        "Apartment 95, 2 Advent Way, , , , Manchester, ",
        "Apartment 96, 2 Advent Way, , , , Manchester, ",
        "Apartment 97, 2 Advent Way, , , , Manchester, ",
        "Apartment 98, 2 Advent Way, , , , Manchester, ",
        "Apartment 99, 2 Advent Way, , , , Manchester, "
    ]

    const addressArray = addresses.map(a => {
        return a.split(',').filter(b => {
          return b !== " "
        }).join();
      });


    this.setState({addresses: addressArray})
  }

  setLeadData = (fields) => {
      this.setState({leadData: fields, submitted: true})
  }
}

export default hot(module)(App);