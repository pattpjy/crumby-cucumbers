import './App.css';
import Main from '../Main/Main';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Route path='/' component={ Main } />
        <Route path='/details' component={ MovieDetails } />
    </div>
  );
}

export default App;
