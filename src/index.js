import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// import * as serviceWorker from './serviceWorker';

// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

// 2
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// 4
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
// serviceWorker.unregister();