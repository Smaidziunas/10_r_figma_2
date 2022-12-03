import './App.css';
import Cta from './components/CTA/Cta';
import Features from './components/features/Features';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Features />
      <Cta />
    </div>
  );
}

export default App;
