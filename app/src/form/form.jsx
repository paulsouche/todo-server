import React from 'react';
import axios from 'axios';

class Form extends React.Component {

  state = {
    description: '',
    memo: ''
  }

  submit = () => {
    axios.post('http://localhost:3000/api/todos', {
      ...this.state
    })
  }

  update = field => (e) => {
    this.setState({
      [field]: e.target.value
    })
  }

 render() {
   return (
     <form action="">
       <input type="text" value={this.state.desc} onChange={this.update('description')}/>
       <input type="text" value={this.state.memo} onChange={this.update('memo')}/>
       <button onClick={this.submit}>add todo</button>
     </form>
   )
 }
}

export default Form;