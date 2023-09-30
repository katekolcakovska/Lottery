import Lottery from './Lottery';
import './App.css';
import Ball from './Ball';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Miini Daily' maxNum={10} maxBalls={4} />
    </div>
  );
}

export default App;
