import React, { Component} from "react";

class DataView extends Component {
    render() {
        const { postcode, address, firstName, lastName, emailAddress, dateOfBirth } = this.props.leadData

        let addressParts = address.split(',')

        return (
            <div>
            <div>Lead name is: {`${firstName} ${lastName}`}</div>
            <div>Lead email is: {`${emailAddress}`}</div>
            <div>Lead date of birth is: {`${dateOfBirth}`}</div>
            <div>Lead address is:</div>
            <div>{`${addressParts[0]}`}</div>
            <div>{`${addressParts[1]}`}</div>
            <div>{`${addressParts[2]}`}</div>
            {addressParts[3] ? <div>{`${addressParts[2]}`}</div> : null}
            <div>{`${postcode}`}</div>
            </div>
        )
    }
}

export default DataView;