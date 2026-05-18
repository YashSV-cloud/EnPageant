function onDragStart(source, piece) {

  if (game.game_over()) return false;

  if (piece.search(/^b/) !== -1) return false;
}

function onDrop(source, target) {

  removeHighlights();

  const move = game.move({
    from: source,
    to: target,
    promotion: 'q'
  });

  if (move === null) return 'snapback';

  playMoveSound(move);

  highlightMove(source, target);

  updateMoveHistory();

  updateStatus();

  analyzeMove(move);

  provideLearningInsights();

  window.setTimeout(makeAIMove, 300);
}

function onSnapEnd() {
  board.position(game.fen());
}