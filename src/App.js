import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import SearchBar from './components/SearchBar';
import Watch from './components/Watch';
import Results from './components/Results';

export default function App() {
  return (
    <div className="App">
      <SearchBar />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/watch" component={() => <Watch />} />
        <Route exact path="/results" component={() => <Results />} />
      </BrowserRouter>
    </div>
  );
}
