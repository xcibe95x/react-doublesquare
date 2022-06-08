import './Square.css';
import BlueSquare from './components/blueSquare';
import RedSquare from './components/redSquare';

function Square() {
  return (
    <div className="Square">
      <header className="App-header">
        <RedSquare />
        <BlueSquare />
      </header>
    </div>
  );
}

export default Square;
