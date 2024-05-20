import "../../scss/CreateVoting.scss";
import React, { useState } from "react";
import axios from "axios";

const CreateVoting = () => {
  const [votingData, setVotingData] = useState({
    title: "",
    description: "",
    questions: Array(6).fill(""),
  });

  const handleBack = () => {
    window.location.href = "./";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("question")) {
      const index = parseInt(name.split("-")[1], 10);
      const newQuestions = [...votingData.questions];
      newQuestions[index] = value;
      setVotingData({ ...votingData, questions: newQuestions });
    } else {
      setVotingData({ ...votingData, [name]: value });
    }
  };

  const handleStartClick = async () => {
    try {
      const response = await axios.post("/api/vote", votingData);
      console.log("Voting created:", response.data);
      window.location.href = "/";
    } catch (error) {
      console.error("Error creating voting:", error);
    }
  };

  return (
    <div className="createVoting">
      <div className="navbar">
        <h1 className="voting-app">Voting app</h1>
        <div className="user-info">
          {/* Tutaj możesz dodać komponent wyświetlający informacje o użytkowniku */}
        </div>
        <div className="back">
          <button className="backbutton" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
      <div className="main">
        <div className="details">
          <input
            className="title-input"
            type="text"
            placeholder="title"
            name="title"
            value={votingData.title}
            onChange={handleChange}
          />
          <input
            className="description-input"
            type="text"
            placeholder="description"
            name="description"
            value={votingData.description}
            onChange={handleChange}
          />
        </div>
        <div className="questions">
          {votingData.questions.map((question, index) => (
            <input
              key={index}
              className="questions-input"
              type="text"
              placeholder={`question ${index + 1}`}
              name={`question-${index}`}
              value={question}
              onChange={handleChange}
            />
          ))}
        </div>
        <div className="start">
          <button className="start" type="button" onClick={handleStartClick}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateVoting;
