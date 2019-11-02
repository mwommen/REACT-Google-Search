import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/SaveBooks.js";
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./Nav";
import Footer from "./Footer"
import axios from 'axios';

const App = props => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get('/api/books/')
    .then(allBooks => {
      setBooks(allBooks.data);
    })
    .catch(err => console.log(err));
  }, [setBooks]);

  return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <SearchBooks books={books} />} />
            <Route exact path="/saved" component={SaveBooks} />
            <Route exact path="/saved/:id" component={SaveBooks} />
            <Route component={NoMatch} /> 
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

export default App;
