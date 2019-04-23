import React from 'react';
import './customers.css';

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    }
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers },
          () => console.log('customers fetched ..', customers)));
  }

  render() {
    return (
      <div>
        <h4>Customers</h4>
        <ul>
          { this.state.customers.map(customer =>
            <li key={customer.id}>
              { customer.firstName} {customer.lastName }
            </li>) }
        </ul>
      </div>
    );
  }
}

export default Customers;
