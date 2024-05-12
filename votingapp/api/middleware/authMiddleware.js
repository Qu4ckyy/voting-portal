exports.authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ error: "Brak tokenu JWT. Użytkownik nie jest zalogowany." });
  }

  // Tutaj możemy zweryfikować token JWT, np. przy użyciu biblioteki jsonwebtoken
  // W tym miejscu powinna być także logika sprawdzająca czy token jest poprawny i nie wygasł

  // Jeśli token jest poprawny, możemy kontynuować obsługę żądania
  next();
};

exports.handleUnauthenticatedUser = (req, res, next) => {
  res.status(401).json({ error: "Użytkownik nie jest zalogowany" });
};
