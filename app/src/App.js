import React, { Component } from 'react';
import axios from 'axios';
import Form from './form/form';
import './App.css';


class App extends Component {
  state = {}

  async componentDidMount() {
    try {
      const { data } = await axios.get('http://localhost:3000/api/todos');
      this.setState({
        list: data
      })
    } catch(e) {
      console.error(e);
    }
  }

  remove = (id) = () => {
    
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.list && this.state.list.map(item => (
            <li style={{}}>
              <span>{item.id}</span>
              <span>{item.description}</span>
              <span>{item.memo}</span>
              <span>{item.priority}</span>
              <span>{item.updated_at}</span>
              <button onClick={this.remove(item.id)}>delete</button>
            </li>
          ))}
        </ul>
        <Form />
      </div>
    );
  }
}

export default App;
