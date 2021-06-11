import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then((registration) => {
      console.log('SW Registered');
      console.log(registration);
    })
    .catch((error) => {
      console.log('SW Registration Failed');
      console.log(error);
    });
}

ReactDOM.render(<App />, document.getElementById('root'));
