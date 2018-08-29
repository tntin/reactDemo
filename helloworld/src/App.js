import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



function userToString(user){
  return user.name + "," + user.age;
}

function checkUser(user){
  if(user.age == 20){
      return <h2>{user.name}</h2>;
  }
}

const user = {
  name: "小明",
  age: 20 
}

const element = (
  <h1>
    Hello World, {userToString(user)}
    <p>今晚打老虎</p>
  </h1>
)

const element2 = (
  <span>Hello, {checkUser(user)}</span>
)

const element3 = (
  <div tabIndex = "index_0">element_3</div>
)

// const title = response.potentiallyMaliciousInput;
// 直接使用是安全的：
// const element4 = <h1>{title}</h1>;

const element5 = (
  <h1 class="greeting">
    Hello, World!
  </h1>
)
//element5和element5_2两种写法效果一样
const element5_2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      {element}
      {element2}
      {element3}
      {/* {element4} */}
      {element5}
      {element5_2}
      </div>
    );
  }
}

export default App;
