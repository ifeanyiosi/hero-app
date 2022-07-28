import React from 'react'
import '../App.css'

function Form(props) {
  return (
    <form onSubmit={props.getHero}>
      <input type="text" name='heroName' />
      <button>Search</button>
    </form>
  );
}

export default Form