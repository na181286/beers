import './index.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import './theme/index.less';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
