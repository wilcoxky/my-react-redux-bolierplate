import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import * as actions from './actions/index';
import configureStore from './stores/configureStore';
import App from './components/App';
import { testingOut } from './actions/index';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={} />
        <Route path="/" component={} />
        <Route path="/Callback" component={} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
