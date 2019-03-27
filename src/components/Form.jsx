import React, { Component} from "react";
import AddressSelect from './AddressSelect';

const styles= {
    error: {
        color: '#dc3545'
    }
}

class Form extends Component {
    state = {
        postcode: '',
        address: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        dateOfBirth: '',
        consent: false,
        displayError: false
    }

    render() {

        let { postcode, firstName, lastName, emailAddress, dateOfBirth, consent, displayError} = this.state

        return (
            <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="row">
                    <div className="col">
                        <input type="text" name='firstName' id="name" className="form-control" placeholder="First name" onChange={this.changeField} value={firstName}/>
                    </div>
                    <div className="col">
                        <input type="text" name='lastName' id="name" className="form-control" placeholder="Last name" onChange={this.changeField} value={lastName}/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" name='emailAddress' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.changeField} value={emailAddress}/>
                 <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="text" name='dateOfBirth'className="form-control" id="dob" placeholder="DD/MM/YYYY format" onChange={this.changeField} value={dateOfBirth}/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Address</label>
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <input type="text" className="form-control" name="postcode" value={postcode} onChange={this.changeField} id="addressLookup" aria-describedby="button-addon2" placeholder="Enter your Postcode"/>
                            <div className="input-group-append">
                            <button onClick={this.callLookupAddresses} className="btn btn-outline-secondary" type="button" id="button-addon2">Continue</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    {this.props.addresses.length ?
                    <div>
                        <AddressSelect 
                            addresses={this.props.addresses}
                            selectAddress={this.selectAddress}
                            address={this.state.address}
                        />
                    </div>
                    : null }
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" name="consent" type="checkbox" id="defaultCheck1" value={consent} onChange={this.handleConsent} required/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                    {displayError ? <div style={styles.error} >I consent to Pay Justice storing my personal details. You must provide this to proceed.</div> : <div>I consent to Pay Justice storing my personal details.</div>}
                    </label>
                </div>
            </div>

            <button type="submit" onClick={this.submitData} className="btn btn-primary">Submit</button>
            </form>
        )
    }


    callLookupAddresses = event => {
        const { postcode } = this.state;
        event.preventDefault();
        this.props.lookupAddresses(postcode);
    }

    changeField = (event) => {
        let field = event.target.name;
        let value = event.target.value;
        this.setState({ [field]: value });
    }

    selectAddress = event => {
        let address = event.target.value;
        this.setState({ address: address})
    }

    handleConsent = event => {
        this.setState({ consent: event.target.checked, displayError: false })
    }

    submitData = event => {
        event.preventDefault();

        if (!this.state.consent) {
           return  this.setState({displayError: true});
        }

        this.props.setLeadData(this.state);

    }


    
    


}


export default Form;