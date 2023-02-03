import './App.css';
import Main from '../Main/Main';
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header';
import { Route, Link, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/details'>
          <MovieDetails/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
