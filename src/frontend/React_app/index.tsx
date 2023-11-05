import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Listen for messages sent from the extension host
window.addEventListener('message', event => {
  const message = event.data; // The JSON data our extension sent
  switch (message.command) {
    case 'doSomething':
      // Handle the message and perform actions
      break;
    // Handle other messages...
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
