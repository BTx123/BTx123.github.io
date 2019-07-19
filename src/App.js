import React from 'react';
// import logo from './logo.svg';
import './App.css';

const footer =
  <div id="footer">
    <ul className="list-unstyled text-center">
      <li>
        &copy; Brian Tom {new Date().getFullYear()}
      </li>
      <li>
        Computer Science and Engineering (CSE)
      </li>
      <li>
        University of California, Irvine
      </li>
    </ul>
  </div>;

function App() {
  return (
    footer
  );
}

export default App;
