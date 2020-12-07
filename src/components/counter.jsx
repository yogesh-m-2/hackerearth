import React, { Component } from 'react';


class Counter extends Component{
   state = {
     data: null,
     discount :null
   };


  async componentDidMount() {
    const response = await fetch('http://hackerearth-env.eba-7hqq8xkm.us-east-2.elasticbeanstalk.com/api',{

        method : 'GET',
        headers :{

          'Content-Type':'application/json',
          'Accept-Encoding':'gzip, deflate, br',
          'Accept':'*/*'

    }});
    const data = await response.json();
    this.setState({data: data[this.props.id].name });
    this.setState({discount: data[this.props.id] });
    console.log(data[0].Item1);
  }

  check_discount(){
    return this.state.fiction === 'fiction' ? 'you got discount' : 'no discount';
  }




  render(){
    return(
      <div>
      <span className="badge badge-primary m-2">{this.formatCount()}</span>
      <button onClick={()=>this.props.onIncrement(this.props.id)} className="btn btn-secondary">item number {this.state.data}</button>
      <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-success">add item</button>
      <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-danger">remove item</button>
      <button onClick={()=>this.props.onDelete(this.props.id)}
      className="btn btn-danger m-2">delete</button>
      </div>
    );
  }

  formatCount(){
    const {value} = this.props;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
