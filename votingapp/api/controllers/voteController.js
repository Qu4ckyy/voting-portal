// Przykładowa funkcja do dodawania głosu
exports.addVote = (req, res) => {
  // Implementacja logiki dodawania głosu
  res.json({ message: "Głos został dodany" });
};

// Przykładowa funkcja do pobierania wyników głosowania
exports.getVoteResults = (req, res) => {
  // Implementacja logiki pobierania wyników głosowania
  res.json({ results: "Wyniki głosowania" });
};
