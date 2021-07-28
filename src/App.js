import React from "react";
import PropTypes from "prop-types";


class App extends React.Component {
  state = {
    // state == object
    // component의 data를 넣을 공간이 있고 이 데이터는 변하는
    count: 0
  };

  add = () => {
    console.log('add');
    // this.state.count = 1;
    // this.setState({ count: this.state.count + 1 });
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    console.log('minus');
    // this.state.count = -1;
    // this.setState({ count: this.state.count -1 });
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    return ( 
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>+add</button>
        <button onClick={this.minus}>-minus</button>
      </div>
    );
  }

}


  export default App;
