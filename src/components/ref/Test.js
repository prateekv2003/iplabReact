import React, { Component, createRef } from 'react'

export default class Test extends Component {
    constructor(){
        super();
        this.ref = React.createRef();
    }

    printSomething(){
        this.ref.current.style.color='red';
    }
  render() {
    return (
      <div>
        <input type="text" placeholder='Enter name' ref={this.ref} />
        <button onClick={()=>this.printSomething()}>Click</button>
      </div>
    )
  }
}
