import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './componets/app/app';
import ErrorBoundry from "./componets/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./componets/bookstore-service-context";

import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
      <ErrorBoundry>
          <BookstoreServiceProvider value={bookstoreService}>
              <Router>
                  <App/>
              </Router>
          </BookstoreServiceProvider>
      </ErrorBoundry>
  </Provider>,
    document.getElementById('root')
);