import React, { Component } from 'react'

export default class Test extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
    }

    componentDidMount(){
        console.log("Inside componentDidMount")
    }

    componentDidUpdate(){
        console.log("Inside componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("Inside componentWillUnmount")
    }
  render() {
    return (
      <>
        <div>in render</div>
        <p>{this.state.count}</p>
        <button onClick={()=>this.setState({count : this.state.count+1})}>Click</button>
      </>

    )
  }
}
