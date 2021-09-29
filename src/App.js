import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ComparePoke from './pages/ComparePoke';
import MainList from './pages/MainList';

function App() {
  return (
    <Fragment>
      <MainHeader />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <MainList />
        </Route>
        <Route path='/comparison'>
          <ComparePoke />
        </Route>
        <Route path='*'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
