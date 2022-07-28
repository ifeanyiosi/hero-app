import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'

export class App extends Component {
  getHero = (e) => {
    const heroName = e.target.elements.heroName.value;
    e.preventDefault();
    console.log(heroName);
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Hero Search</h1>
        </header>
        <Form getHero={this.getHero} />
      </div>
    )
  }
}

export default App