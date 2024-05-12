const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const voteRoutes = require("./routes/voteRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.use("/api", voteRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Nie znaleziono endpointu" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Wystąpił błąd serwera" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer jest uruchomiony na porcie ${PORT}`);
});
