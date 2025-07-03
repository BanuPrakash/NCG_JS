import React, { Component } from 'react'
import CustomerRow from './CustomerRow'
import Filter from './Filter'

export default class CustomerList extends Component {

    state = {
        customers: [
            {
                "id": 1,
                "firstName": "Chandler",
                "lastName": "Bing",
                "gender": "male"
            },
            {
                "id": 2,
                "firstName": "Joey",
                "lastName": "Tribuanni",
                "gender": "male"
            },
            {
                "id": 3,
                "firstName": "Monica",
                "lastName": "Geller",
                "gender": "female"
            },
            {
                "id": 4,
                "firstName": "Ross",
                "lastName": "Geller",
                "gender": "female"
            },
            {
                "id": 5,
                "firstName": "Rachel",
                "lastName": "Green",
                "gender": "female"
            },
            {
                "id": 6,
                "firstName": "Phoebe",
                "lastName": "Buffay",
                "gender": "female"
            }
        ]
    }

    // life cycle methods called after constructor
    componentDidMount() {
        this.state.original = this.state.customers; // copy
    }

    filterCustomer(txt) {
        // filter based on lastName --> G
        let custs = this.state.original.filter(customer => customer.lastName.indexOf(txt) >= 0);
        this.setState({
            customers: custs
        });
    }
    deleteCustomer(id) {
        let custs = this.state.customers.filter(customer => customer.id !== id);
        // this.state.customers = custs; // change the state --> doesn't trigger reconcillation

        // force reconcilliation
        this.setState({
            customers: custs,
            original: custs,
        }, () => {
            console.log(this.state.customers);
        });

        // console.log(this.state.customers); // can be a stale state
    }
    render() {
        return (
            <div>
                <Filter filterEvt={(txt) => this.filterCustomer(txt)} />
                {
                    this.state.customers.map(customer => <CustomerRow
                        key={customer.id}
                        delEvent={(id) => this.deleteCustomer(id)}
                        customer={customer} />)
                }
            </div>
        )
    }
}
