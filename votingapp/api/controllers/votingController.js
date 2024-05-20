let votings = []; // Tymczasowa baza danych w pamięci

const createVoting = (req, res) => {
  const { title, description, questions } = req.body;

  const newVoting = {
    id: votings.length + 1,
    title,
    description,
    questions,
    createdBy: req.user ? req.user.email : "anonymous",
  };

  votings.push(newVoting);
  res
    .status(201)
    .json({ message: "Voting created successfully", voting: newVoting });
};

const joinVoting = (req, res) => {
  const { votingId, answers } = req.body;

  const voting = votings.find((v) => v.id === parseInt(votingId));

  if (!voting) {
    return res.status(404).json({ message: "Voting not found" });
  }

  // Logika do dodania odpowiedzi użytkownika do głosowania
  // ...

  res.status(200).json({ message: "Successfully joined voting", voting });
};

const getVoting = (req, res) => {
  const { id } = req.params;
  const voting = votings.find((v) => v.id === parseInt(id));

  if (!voting) {
    return res.status(404).json({ message: "Voting not found" });
  }

  res.status(200).json(voting);
};

module.exports = {
  createVoting,
  joinVoting,
  getVoting,
};
