import "../../scss/CreateVoting.scss";
import React from "react";

const CreateVoting = () => {


    const handleBack = () => {
        window.location.href = './'
    }

    const handleDelete = () => {

    }

    const handleStartClick = () => [
        window.location.href = ''
    ]

    return (
        <div className="createVoting">
            <div className="navbar">
                <h1 className="voting-app">Voting app</h1>
                <div className="user-info">
                    {/* Tutaj możesz dodać komponent wyświetlający informacje o użytkowniku */}
                </div>
                <div className="back">
                    <button className="backbutton" onClick={handleBack}>Back</button>
                </div>
            </div>
            <div className="main">
                <div className="details">
                    <input
                        className="title-input"
                        type="title"
                        placeholder="title"
                        name="voting-title"
                    />
                    <input
                        className="description-input"
                        type="description"
                        placeholder="description"
                        name="voting-description"
                    />
                </div>
                <div className="questions">
                    <input
                        className="questions-input"
                        type="questions"
                        placeholder="questions 1"
                        name="voting-questions"
                    />
                    <input
                        className="questions-input"
                        type="questions"
                        placeholder="questions 2"
                        name="voting-questions"
                    />
                    <input
                        className="questions-input"
                        type="questions"
                        placeholder="questions 3"
                        name="voting-questions"
                    />
                    <input
                        className="questions-input"
                        type="questions"
                        placeholder="questions 4"
                        name="voting-questions"
                    />
                    <input
                        className="questions-input"
                        type="questions"
                        placeholder="questions 5"
                        name="voting-questions"
                    />
                    <input
                        className="questions-input"
                        type="questions"
                        placeholder="questions 6"
                        name="voting-questions"
                    />
                </div>
                <div className="start">
                    <button className="start" type="button" onClick={handleStartClick}>Start</button>
                </div>
            </div>
        </div>
    )
}



export default CreateVoting;