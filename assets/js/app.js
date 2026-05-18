const game = new Chess();

let board = null;

const config = {
  draggable: true,
  position: 'start',
  onDragStart,
  onDrop,
  onSnapEnd
};

board = Chessboard('board', config);

updateStatus();