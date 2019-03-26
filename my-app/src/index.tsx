import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HelloClass from './components/Hello';
import './components/Hello.css';

ReactDOM.render(
  // <App />,
  <HelloClass name="Daniel" ex={-3}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
