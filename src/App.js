import React from "react";


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log("hello");
  // }

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

  componentDidMount() {
    console.log("Component rendered");
  }

  componentDidUpdate() {
    // onClick 으로 숫자가 변하게 만든거 자체가 update
    console.log("I just updated");
  }

  componentWillUnmount() {
    // preserve log 체크 후 reload하면 볼 수 있음
    console.log("GoodBye, cruel world");
  }

  render() {
    console.log("I'm rendering");
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
