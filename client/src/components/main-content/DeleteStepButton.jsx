import React, { useState } from "react";
import { deleteProject } from "../../api/apicalls";

export default function DeleteStepButton(props) {
  const { state, id, actualise } = props;

  console.log("id fronm delete:", id);

  const [step, setStep] = useState(0);

  const handleClick = () => {
    if (step === 0) {
      setStep(1);
      setTimeout(() => {
        setStep(0);
      }, 2000);
    } else {
      deleteProject(id);
      setStep(0);
      actualise();
    }
  };
  return (
    <button
      onClick={handleClick}
      className={
        "delete-project-btn" + (step === 0 ? "" : " confirm-delete-btn")
      }
    >
      {step === 0 ? "Delete" : state === "idea" ? "Really ?" : "Confirm ?"}
    </button>
  );
}
