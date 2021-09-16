import React from "react";

function HintModal({ modal, setModal, hint }) {
  return (
    <div
      className="modal-container"
      style={
        modal
          ? {
              display: "flex",
              pointerEvents: "auto",
            }
          : {
              display: "none",
              pointerEvents: "none",
            }
      }
    >
      <div className="modal">
        <button className="delete-btn" onClick={() => setModal(false)}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 12.9998L2.00024 2"
              stroke="#B0B3BC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M2.00001 13L12.9998 2.00031"
              stroke="#B0B3BC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="hint">
          <h2>{hint.title}</h2>
          <p>{hint.description}</p>
        </div>
      </div>
    </div>
  );
}

export default HintModal;
