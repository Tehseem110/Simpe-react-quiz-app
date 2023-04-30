import React, { useState, useEffect } from 'react';
import './App.css';
import boo from '../src/boo.gif';
import hurray from '../src/yeah.gif';
import cup from '../src/cup2.png';
import low from '../src/low.jpg';
import average from '../src/average.jpg';
import high from '../src/best.jpg';
const questions = [
  {
    question:
      'which of the following is usually not an objective of individual relations (IR)?',
    answers: [
      { id: 'a', text: 'Connectedness' },
      { id: 'b', text: 'Collective wisdom' },
      { id: 'c', text: 'Conflict prevention' },
      { id: 'd', text: 'None of the above' },
    ],
    correctAnswer: 'd',
  },
  {
    question: 'unions are part of both IR and ER.',
    answers: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
      { id: 'c', text: 'maybe' },
    ],
    correctAnswer: 'b',
  },

  {
    question: 'which of the following are part of employee relation (ER)?',
    answers: [
      { id: 'a', text: 'Career development' },
      { id: 'b', text: 'Employee well-being' },
      { id: 'c', text: 'Collective bargain' },
      { id: 'd', text: 'Both a and b' },
      { id: 'e', text: 'Both b and c' },
      { id: 'f', text: 'All' },
    ],
    correctAnswer: 'd',
  },
  {
    question: 'law that help in establishment of modern IR framework',
    answers: [
      { id: 'a', text: 'NLRA' },
      { id: 'b', text: 'FLSA' },
      { id: 'c', text: 'None' },
      { id: 'd', text: 'Both' },
    ],
    correctAnswer: 'd',
  },
  {
    question: 'industrial relation is _________',
    answers: [
      { id: 'a', text: 'Future oriented' },
      { id: 'b', text: 'Broader approach' },
      { id: 'c', text: 'Adversarial approach' },
      { id: 'd', text: 'Employee centric' },
    ],
    correctAnswer: 'c',
  },
  {
    question: 'ER is focused on',
    answers: [
      { id: 'a', text: 'Achieving only management goals' },
      { id: 'b', text: 'Few important individual right' },
      { id: 'c', text: 'Each and every indivial rights' },
      { id: 'd', text: 'Both a and b' },
    ],
    correctAnswer: 'c',
  },
  {
    question: 'types of communication under ER',
    answers: [
      { id: 'a', text: 'FORMAL' },
      { id: 'b', text: 'INFORMAL' },
      { id: 'c', text: 'MIXTURE OF BOTH' },
    ],
    correctAnswer: 'c',
  },
  {
    question: 'which statement is true about ER?',
    answers: [
      { id: 'a', text: 'ER include collective bargaining' },
      { id: 'b', text: 'ER work for sustainable future' },
      { id: 'c', text: 'ER is union dominated' },
      {
        id: 'd',
        text: 'ER focus more on conflict resolution then its prevention',
      },
    ],
    correctAnswer: 'b',
  },
  {
    question: 'what is gig economy',
    answers: [
      { id: 'a', text: 'Fresh talent economy' },
      { id: 'b', text: 'Unemployed economy' },
      { id: 'c', text: 'Non traditional workers' },
      { id: 'd', text: 'Unionize economy' },
    ],
    correctAnswer: 'c',
  },
  {
    question: 'ER is collaborative approach',
    answers: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctAnswer: 'a',
  },
  {
    question: 'at early stage IR treats Employees as:',
    answers: [
      { id: 'a', text: 'Important asset for company' },
      { id: 'b', text: 'Labour/workers who work only for salary' },
      { id: 'c', text: 'Decision maker' },
      { id: 'd', text: 'None' },
    ],
    correctAnswer: 'b',
  },
  {
    question: 'what do you mean by adversarial approach',
    answers: [
      { id: 'a', text: 'Win win' },
      { id: 'b', text: 'WIn loose' },
      { id: 'c', text: 'Collaboration' },
      { id: 'd', text: 'Zero zero' },
    ],
    correctAnswer: 'b',
  },
  {
    question: 'ER is collaborative approach',
    answers: [
      { id: 'a', text: 'Yes' },
      { id: 'b', text: 'No' },
      { id: 'c', text: 'A bit' },
    ],
    correctAnswer: 'a',
  },
  {
    question: 'anticipating problems comes under',
    answers: [
      { id: 'a', text: 'Industrial relation' },
      { id: 'b', text: 'Employee relation' },
      { id: 'c', text: 'None' },
    ],
    correctAnswer: 'b',
  },
  {
    question: 'which one is not reason for shift from IR to ER?',
    answers: [
      { id: 'a', text: 'Due to Changing demographics' },
      { id: 'b', text: 'Developing powerful management' },
      { id: 'c', text: 'Changing legal landscape' },
      { id: 'd', text: 'Due to advancement of AI' },
    ],
    correctAnswer: 'b',
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [emoji, setEmoji] = useState('');
  const [bannerToggle, setBannerToggle] = useState(true);
  const [hideQuestion, setHideQuestion] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setEmoji('correct');
    } else {
      setEmoji('wrong');
    }

    setHideQuestion(true);
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setEmoji('');
        setHideQuestion(false);
      } else {
        setShowScore(true);
      }
    }, 1300);
  };

  useEffect(() => {
    if (hideQuestion) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [hideQuestion]);

  return (
    <div>
      {bannerToggle ? (
        <div className="banner">
          <h1 className="bannerTitle">Welcome to Quiz Contest</h1>
          <button
            className="bannerButton"
            onClick={() => {
              setBannerToggle(false);
            }}
          >
            Press Start to Play
          </button>
          <img src={cup} alt="gif" />
        </div>
      ) : (
        <div className="quiz">
          {showScore ? (
            <div className="score-section">
              <div className="score-results">
                You scored {score} out of {questions.length}
              </div>
              {score > 12 ? (
                <img
                  className="score-img"
                  src={high}
                  alt="gif"
                  style={{ maxWidth: '250px' }}
                />
              ) : score > 8 ? (
                <img
                  className="score-img"
                  src={average}
                  alt="gif"
                  style={{ maxWidth: '250px' }}
                />
              ) : (
                <img
                  className="score-img"
                  src={low}
                  alt="gif"
                  style={{ maxWidth: '250px' }}
                />
              )}
            </div>
          ) : (
            <>
              {!hideQuestion && (
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].question}
                  </div>
                </div>
              )}
              <div className="answer-section">
                {!hideQuestion &&
                  questions[currentQuestion].answers.map((answerOption) => (
                    <button
                      className="answer-button"
                      key={answerOption.id}
                      onClick={() =>
                        handleAnswerOptionClick(
                          answerOption.id ===
                            questions[currentQuestion].correctAnswer
                        )
                      }
                    >
                      {answerOption.text}
                    </button>
                  ))}
                {emoji && (
                  <div className="emoji-container">
                    <div className="emoji">
                      {emoji === 'correct' ? (
                        <img
                          src={hurray}
                          alt="gif"
                          style={{ maxWidth: '250px' }}
                        />
                      ) : (
                        <img
                          src={boo}
                          alt="gif"
                          style={{ maxWidth: '250px' }}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
