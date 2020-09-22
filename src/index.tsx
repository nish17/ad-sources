import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import RootComponent from './Components/RootComponent';


ReactDOM.render(
  <RootComponent>
    <App />
  </RootComponent>,
  document.getElementById('root')
);

