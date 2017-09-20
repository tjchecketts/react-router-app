import React from 'react';
import axios from 'axios'

class Product extends React.Component {
  state = { product: {} }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then( res => this.setState({ product: res.data }) )
  }

  render() {
    let { product: { name, description, price, department }} = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
        <h3>{department}</h3>
      </div>
    )
  }
}

export default Product;