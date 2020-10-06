import React, {Component} from 'react';
import CRMService from "../services/CRMServices";
import Redirect from "react-router-dom/es/Redirect";

export default class AddCustomer extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeMembershipLength = this.onChangeMembershipLength.bind(this);
        this.onChangePaymentType = this.onChangePaymentType.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);

        this.state = {
            name: "",
            address: "",
            mobile: "",
            membershipLength: "",
            pamymentType:"",
            submitted: false
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeMobile(e) {
        this.setState({
            mobile: e.target.value
        });
    }

    onChangeMembershipLength(e) {
        this.setState({
            membershipLength: e.target.value
        });
    }

    onChangePaymentType(e) {
        this.setState({
            paymentType: e.target.value
        });
    }

    saveCustomer() {
        var data = {
            name: this.state.name,
            address: this.state.address,
            mobile: this.state.mobile,
            membershipLength: this.state.membershipLength,
            paymentType: this.state.paymentType
        }

        CRMService.save(data)
            .then(response => {
                this.setState({
                    submitted: true
                });
            })
            .catch(e => {
                alert(e);
                console.log(e);
            });
    }

    render() {
        if(this.state.submitted) {
            return <Redirect to="welcome" />
        }
        return (<form name="addCustomerForm" onSubmit={this.saveCustomer}>
            <h1>Add Customer</h1>
        <div className="form-group">
            <label htmlFor="examplename">Name</label>
            <input type="text" className="form-control" id="exampleName" aria-describedby="nameHelp"
        placeholder="Enter name" value={this.state.name} onChange={this.onChangeName} required/>
        <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone
    else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputAddress">Address</label>
            <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp"
        placeholder="Enter address" value={this.state.address} onChange={this.onChangeAddress} required/>
        <small id="addressHelp" className="form-text text-muted">We'll never share your details with anyone
    else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputMoile">Mobile</label>
            <input type="text" className="form-control" id="exampleInputMobile" aria-describedby="mobileHelp"
                   placeholder="Enter mobile" value={this.state.mobile} onChange={this.onChangeMobile} required/>
            <small id="mobileHelp" className="form-text text-muted">We'll never share your details with anyone
                else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="membershipLength">Membership Length</label>
            <select name="membershipLength" id="membershipLength" className="form-control"
                    value={this.state.membershipLength} onChange={this.onChangeMembershipLength} required>
                <option value="select">Select</option>
                <option value="1">1 month</option>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
            </select>
            <small id="membershipLengthHelp" className="form-text text-muted">We'll never share your details with anyone
                else.</small>
        </div>
            <div className="form-group">
                <label htmlFor="paymentType">Payment Type</label>
                <select name="paymentType" id="paymentType" className="form-control"
                        value={this.state.paymentType} onChange={this.onChangePaymentType} required>
                    <option value="select">Select</option>
                    <option value="Direct Debit">Direct Debit</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Credit Card">Credit Card</option>
                </select>
                <small id="paymentTypeHelp" className="form-text text-muted">We'll never share your details with anyone
                    else.</small>
            </div>
        <div className="form-group">
            <input type="submit" className="btn btn-primary btn-block" value="Save"/>
        </div>

        </form>)
    }
}
