import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cta from './components/CTA/Cta';
import Features from './components/features/Features';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route path={'/features'}>
          <Features />
        </Route>
        <Route path={'/cta'}>
          <Cta />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
