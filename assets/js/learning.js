function provideLearningInsights() {

  const insights = [
    "Control the center with pawns.",
    "Develop knights before bishops.",
    "Castle early for king safety.",
    "Avoid moving the same piece repeatedly.",
    "Watch for tactical forks and pins."
  ];

  const randomInsight =
    insights[Math.floor(Math.random() * insights.length)];

  document.getElementById('learningOutput').innerHTML =
    `<p>${randomInsight}</p>`;
}