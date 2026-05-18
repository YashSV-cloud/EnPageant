function updateStatus() {

  let status = '';

  const moveColor = game.turn() === 'w'
    ? 'White'
    : 'Black';

  if (game.in_checkmate()) {

    status = 'Checkmate';

    playSound('checkmate');

  } else if (game.in_draw()) {

    status = 'Draw';

  } else {

    status = moveColor + ' to move';

    if (game.in_check()) {

      status += ' - Check';

      playSound('check');
    }
  }

  document.getElementById('gameStatus').innerHTML = status;
}

function updateMoveHistory() {

  const history = game.history();

  let html = '';

  for(let i = 0; i < history.length; i += 2) {

    html += `
      <div>
        ${i / 2 + 1}.
        ${history[i] || ''}
        ${history[i + 1] || ''}
      </div>
    `;
  }

  document.getElementById('moveHistory').innerHTML = html;
}

function highlightMove(source, target) {

  $(`#board .square-${source}`)
    .addClass('highlight-square');

  $(`#board .square-${target}`)
    .addClass('highlight-square');
}

function removeHighlights() {
  $('#board .square-55d63')
    .removeClass('highlight-square');
}

function updateEvaluation(score) {

  const percentage =
    Math.max(0, Math.min(100, 50 + score * 5));

  document.getElementById('evalFill').style.height =
    percentage + '%';

  document.getElementById('evalText').innerText =
    score.toFixed(1);
}

function playSound(name) {

  const audio =
    new Audio(`./assets/sounds/${name}.mp3`);

  audio.play();
}

function playMoveSound(move) {

  if(move.captured) {
    playSound('capture');
  } else {
    playSound('move');
  }
}