import React , {useState}from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import 
{ ApolloClient,
  InMemoryCache, 
  ApolloProvider,
  ApolloLink,
  from,
  HttpLink
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import { Provider } from './context';

const authMiddleware = new ApolloLink((operation, forward)=>{
  const token = window.sessionStorage.getItem('token');  
  if(token){
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null
      }
    }));   
  }
  return forward(operation)
})

const errorMiddleware = onError(({networkError}) =>{
  if(networkError && networkError.result.code === "invalid_token"){
    sessionStorage.removeItem('token')
    window.Location = '/user'
  }
})
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link : from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-vivs.vercel.app/graphql',
    })
  ]),
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
