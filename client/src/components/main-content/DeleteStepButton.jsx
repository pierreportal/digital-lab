import React, { useState } from "react";

export default function DeleteStepButton(props) {
  const [step, setStep] = useState(0);

  const handleClick = () => {
    if (step === 0) {
      setStep(1);
      setTimeout(() => {
        setStep(0);
      }, 2000);
    } else {
      console.log("delete");
    }
  };
  return (
    <button
      onClick={handleClick}
      className={
        "delete-project-btn" + (step === 0 ? "" : " confirm-delete-btn")
      }
    >
      {step === 0 ? "delete" : "confirm ?"}
    </button>
  );
}
