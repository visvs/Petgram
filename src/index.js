import React , {useState}from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import {ApolloClient ,InMemoryCache, ApolloProvider} from '@apollo/client';
import { Provider } from './context';

const client = new ApolloClient({
  uri: 'https://petgram-server-vivs.vercel.app/graphql',
  cache: new InMemoryCache()
})

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>

);
