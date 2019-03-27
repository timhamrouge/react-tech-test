import React, { Component} from "react";

const AddressSelect = props => {
    let {addresses, selectAddress} = props;
    return (
        <select onChange={selectAddress} className='custom-select'>
            <option defaultValue>Choose your address from the list...</option>
            {addresses.map(address => {
                return <option key={address} value={address}>{address}</option>
            })}
        </select>
    );
}

export default AddressSelect;