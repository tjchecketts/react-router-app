import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

class Dashboard extends React.Component {
  state = { products: [], showForm: false }

  componentDidMount() {
    axios.get('url')
      .then( res => this.setState({ products: res.data }) )
  }

  show() {
    let { products } = this.state;
    return (
      <ul>
       { products.map( p => 
           <li key={p.id}>
             <Link to={`/products/${p.id}`}>{p.name}</Link>
           </li> 
         ) 
       }
     </ul>
   )
 }


form() {
  return <Form submit={this.submit}/>
}

submit = (product) => {
  let { products } = this.state;
  axios.post('/api/products', { product } )
    .then( res => this.setState({ products: [{...res.data}, ...products], showForm: false }) )
    .catch( e => console.log(e.response.data.errors) )
}

toggleForm = () => {
  this.setState( state => {
    return { showForm: !state.showForm }
  })
}

render() {
  let { showForm } = this.state;
  return (
    <div>
      <h2>Products</h2>
      <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } form</button>
      { showForm ? this.form() : this.show() }
      
    </div>
  )
}
}
export default Dashboard;