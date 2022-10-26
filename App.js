/*import * as ReactDOM from 'react-dom'

<div id="root">
</div>

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function App() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(App, 1000);

export default App;


import React from "react";

class App extends React.Component {
  render()
  {
    return<h1>Hellow, Talha</h1>;
  }
}
export default App
import logo from './logo.svg';
import './App.css';

function App() {function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Mohammad',
  lastName: 'Talha'
}

function getGreeting(user) {
  if (user) {
    return <h1>Hellow, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

  return (
    <div className="App">
      <header className="App-header">
      {// <h1>Hello, {formatName(user)}!</h1>//
  <h1>Hellow,{getGreeting(user)}</h1>
  
  }

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );

}

export default App;*/
import logo from './logo.svg';
import './App.css';

function App() {function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Mohammad',
  lastName: 'Talha'
}

function getGreeting(user) {
  if (user) {
    return <h1>Hellow, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

  return (
    <div className="App">
      <header className="App-header">
      {// <h1>Hello, {formatName(user)}!</h1>//
  <h1>Hellow,{getGreeting(user)}</h1>
  
  }

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title" >CONTACT FORM</h3><br></br>
          <div className="form-group mt-3">
            <label>Name:</label>
            <input
              type="Name"
              className="form-control mt-1"
              placeholder="Enter Your Name"
            />
          </div>
          <br></br>
          <div className="form-group mt-3">
            <label>Phone:</label>
            <input
              type="Phone"
              className="form-control mt-1"
              placeholder="Enter Phone No"
            />
          </div>
          <br></br>
          <div className="form-group mt-3">
            <label>Email:</label>
            <input
              type="Email"
              className="form-control mt-1"
              placeholder="Enter Your Mail"
            />
          </div>
          <br></br>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

      </header>
      
    </div>
  );

}

export default App;

