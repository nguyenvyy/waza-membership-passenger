import React, { Suspense } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.scss';
import { configStore } from './redux/store';
import { routes } from './config/route-config';
import { RouteWithSubRoutes } from './routes/RouteWithSubRoutes';
import { Loading } from './components/common/Loading/Loading';

const store = configStore()
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Suspense fallback={<Loading />}>
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
