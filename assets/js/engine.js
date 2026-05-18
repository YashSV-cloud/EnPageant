const engine = new Worker('./vendor/stockfish/stockfish.js');

function makeAIMove() {

  const depth = document.getElementById('difficulty').value;

  engine.postMessage('position fen ' + game.fen());
  engine.postMessage('go depth ' + depth);

  engine.onmessage = function(event) {

    const line = event.data;

    if (line.startsWith('bestmove')) {

      const move = line.split(' ')[1];

      game.move({
        from: move.substring(0,2),
        to: move.substring(2,4),
        promotion: 'q'
      });

      board.position(game.fen());

      updateMoveHistory();

      updateStatus();
    }

    if (line.includes('score cp')) {

      const evalScore =
        parseInt(line.split('score cp ')[1]) / 100;

      updateEvaluation(evalScore);
    }
  };
}