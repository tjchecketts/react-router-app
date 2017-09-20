import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import axios from 'axios';
import Form from './Form';

class Dashboard extends React.Component {
  state = { products: [], showForm: false }

  componentDidMount() {
    axios.get('/api/products')
      .then( res => this.setState({ products: res.data }));
  }

  show = () => (
    <div>
      {this.state.products.map( p =>
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>
            {p.name}
          </Link>
        </div>
      )}
    </div>
  )

  submit = (product) => {
    const { products } = this.state;
    axios.post('/api/products', { product })
      .then( res => {
        this.setState({ products: [res.data, ...products], showForm: false }) 
      })
      .catch( e => console.log(e.response.data.errors))
  }

  form = () => {
    return <Form submit={this.submit} />
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm });

  render() {
    const { showForm } = this.state;
    return(
      <div>
        <h2>Our Products</h2>
        <button onClick={this.toggleForm}>
          { showForm ? 'Hide Form' : 'New Item'}
        </button>
        { showForm ? this.form() : this.show() }
      </div>
    )
  }
}

export default Dashboard;