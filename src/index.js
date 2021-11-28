import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, gql, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.RICK_AND_MORTY_API,
  cache: new InMemoryCache()
})

console.log('===>', process.env.RICK_AND_MORTY_API )

client.query({
  query: gql`
    query GetAllCharacters {
      characters{
        results {
          id
          name
          image
          status
          species
          location {
            name
          }
        }
      }
    }
  `
})
.then(result => console.log(result))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

