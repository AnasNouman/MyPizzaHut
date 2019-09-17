import React, { Component } from "react";

import { FaShoppingCart } from "react-icons/fa";
import Items from "./Items";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            order: "",
            quantity: 0,
            price: 0,
            address: ""
        };
    }

    store_quantity(item) {
        let value = item.target.value;
        let name = item.target.name;
        console.log("OMG");
        console.log(name);
        this.setState({ order: this.props.location.state.name });
        this.setState({ quantity: this.props.location.state.quantity });
        this.setState({ price: this.props.location.state.price });
        if (name == "address") {
            this.setState({ address: value });
        } else if (name == "name") {
            this.setState({ name: value });
        } else if (name == "phone") {
            this.setState({ phone: value });
        } else if (name == "email") {
            this.setState({ email: value });
        } else {
            {
                console.log("Error in the input. There will be no output");
            }
        }
    }
    submit(e) {
        // console.log(this.props.location.state.name);
        e.preventDefault();
        // console.log(this.props.location.state.name);
        // console.log(this.props.location.state.price);
        // console.log(this.props.location.state.quantity);
        // console.log(this.state.address);
        //
        // console.log("OKAY");
        // console.log(this.state);

        const orders = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            order: this.state.order,
            quantity: this.state.quantity,
            price: this.state.price,
            address: this.state.address
        };

        console.log("OKAY1234");
        console.log(orders);
        axios
            .post("http://127.0.0.1:8000/myorders/store", orders)
            .then(res => Console.log(res.data));
        alert("Thank you for confirming the order");
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1 className="myhead">Checkout</h1>

                <h2>Flavour:{this.props.location.state.name}</h2>
                <h2>Quantity:{this.props.location.state.quantity}</h2>
                <h2>Total Cost:{this.props.location.state.price}</h2>
                <input
                    id="Name"
                    placeholder="Enter Name"
                    className="qunant"
                    type="text"
                    name="name"
                    onChange={item => this.store_quantity(item)}
                />
                <br />
                <input
                    id="Email"
                    placeholder="Enter Email"
                    className="qunant"
                    type="text"
                    name="email"
                    onChange={item => this.store_quantity(item)}
                />
                <br />
                <input
                    id="Phone"
                    placeholder="Enter Phone #"
                    className="qunant"
                    type="text"
                    name="phone"
                    onChange={item => this.store_quantity(item)}
                />
                <br />
                <input
                    id="address"
                    placeholder="Enter Address"
                    className="qunant"
                    type="text"
                    name="address"
                    onChange={item => this.store_quantity(item)}
                />
                <br />

                <button
                    onClick={this.submit.bind(this)}
                    type="submit"
                    className="btn btn-success"
                >
                    Confirm Payment
                </button>
            </div>
        );
    }
}
