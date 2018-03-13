import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducers from './reducers';
import AuthenticatedRoute from './components/AuthRoute/AuthRoute';
import SignInPage from './components/SignInPage/SignInPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import DashboardPage from './components/DashboardPage/DashboardPage';

export default () => {
  const middlewares = [thunkMiddleware];

  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
  }

  const store = createStore(appReducers, composeWithDevTools(applyMiddleware(...middlewares)));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/signin" component={SignInPage} />
          <AuthenticatedRoute path="/dashboard" component={DashboardPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
