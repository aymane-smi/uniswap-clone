import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import{ Provider } from "react-redux";
import { Store } from "./reducers/Store";
import Home from './components/Home';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import History from './components/History';

const root = ReactDOM.createRoot(document.getElementById('root'));
//apollo client object configuration
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={Store}>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
