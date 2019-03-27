import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './containers/Hello';
import './components/Hello.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers';
import { StoreState } from './types/index';

const store = createStore<StoreState,any,any,any>(enthusiasm, {
  eLevel: 1,
  languageName: 'TS',
});

ReactDOM.render(
  // <App />,
  <Provider store={store}>
    <Hello/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
