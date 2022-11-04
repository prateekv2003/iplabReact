import React,{Component} from "react";
import {Link} from 'react-router-dom'
class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    render(){
        return(
            <>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count: this.state.count+1})}>Click</button>

                <Link to="/">Home</Link>
            </>
        )
    }
} 
export default Counter;