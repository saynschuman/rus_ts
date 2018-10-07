import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import initStore from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
	<Provider store={initStore()}>
		<App />
	</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
