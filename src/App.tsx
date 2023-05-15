import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';

function App() {
  const { board, startGame, isPlaying, isPaused, togglePause, score, upcomingBlocks } = useTetris();

  return (
    <div className="app">
      <h1>Tetris</h1>
      <Board currentBoard={board} />
      <div className="controls">
        <h2 style={{ color: score < 1000 ? 'red' : score < 10000 ? 'yellow' : 'green' }}>Score: {score}</h2>
        {isPlaying ? (
          <>
            <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
            <button className="button-spacing" onClick={togglePause}>{isPaused ? 'Resume' : 'Pause'}</button>
          </>
        ) : (
          <button className="button-spacing" onClick={startGame}>New Game</button>
        )}
      </div>
    </div>
  );
}

export default App;

