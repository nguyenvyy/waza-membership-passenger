import React, { Suspense } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';

import './App.scss';
import { configStore } from './redux/store';
import { routes } from './config/route-config';
import { RouteWithSubRoutes } from './routes/RouteWithSubRoutes';

const store = configStore()
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Suspense fallback="...loading">
            <Switch>
              {routes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
