function analyzeMove(move) {

  let category = "Excellent";

  const random = Math.random();

  if(random < 0.1) category = "Blunder";
  else if(random < 0.2) category = "Mistake";
  else if(random < 0.35) category = "Inaccuracy";
  else if(random < 0.6) category = "Good";

  document.getElementById('analysisOutput').innerHTML = `
    <p><strong>${move.san}</strong> → ${category}</p>
  `;
}