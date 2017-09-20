import React from 'react';
import axios from 'axios';
import Form from './Form';

class Product extends React.Component {
  state = { product: {}, edit: false }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then( res => this.setState({ product: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    });
  }

  submit = (product) => {
    axios.put(`/api/products/${this.props.match.params.id}`, { product })
      .then( res => this.setState({ product: res.data, edit: false }) );
  }

  show() {
    let { product: { name, description, price, department }} = this.state;
    return (
      <div>
        <h1>Item Name: {name}</h1>
        <h3>Description: {description}</h3>
        <h3>Price: ${price}</h3>
        <h3>Department: {department}</h3>
      </div>
    )
  }

  edit() {
    return <Form {...this.state.product} submit={this.submit} />
  }

  render() {
    let { edit } = this.state;
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit Item' }</button>
      </div>
    )
  }
}

export default Product;