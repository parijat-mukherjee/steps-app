import { useState } from "react";

const messages = ["Learn React", "Apply for Jobs", "Invest your new income"];

export default function App() {
  const [step, updateStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    step > 1 ? updateStep(step - 1) : updateStep(step);
  }

  function handleNext() {
    step > 2 ? updateStep(step) : updateStep(step + 1);
  }

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="close" onClick={handleIsOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {" "}
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "purple", color: "white" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "purple", color: "white" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
