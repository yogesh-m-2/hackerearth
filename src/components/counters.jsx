import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component{

  state={
counters: [
  {id:1,value:0},
  {id:2,value:0},
  {id:3,value:0},
  {id:4,value:0}

]
};


handleReset=()=>{
  const counters =this.state.counters.map(c=>{
    c.value = 0;
    return c;
  });
  this.setState({counters});
};

handleIncrement = (counter) => {
const counters = [...this.state.counters];
const index = counters.indexOf(counter);
console.log(counter);
counters[index] = {...counter};
counters[index].value++;
this.setState({counters});

};

handleDecrement = (counter) =>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  //console.log(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({counters});
}

handleDelete=counterId=>{
      console.log("interrupt came ",counterId);
      const counters = this.state.counters.filter(c=>c.id!==counterId);
      this.setState({counters});
};

caltotal(){
  var result=0;
    const counters = [...this.state.counters];
    {counters.map(t=>{
       result=result+t.value;
       return result;
    })}

  return result;
};

parse(){


}
  render(){
    return(
        <div>
          <button onClick={this.handleReset} className="btn btn-primary">reset</button>
          <h1>Welcome to your cart</h1>
          <div className="formcal">total <h1> {this.caltotal()} </h1>   <span>{this.parse()} </span> </div>
         {this.state.counters.map(counter =>(
           <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
               value={counter.value} id={counter.id} counter={counter}/>))}

        </div>
    );
  }
}

export default Counters;
