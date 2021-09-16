import React from "react";
import { updateUserSettings } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../features/auth/authSlice";
function ProfileModal({ modal, setModal, data }) {
  const [checked, setChecked] = React.useState(data.settings.notify);
  const [redirect, setRedirect] = React.useState(false);
  const dispatch = useDispatch();
  function handleClose() {
    setModal(false);
  }
  function handleLogout() {
    setModal(false);
    setRedirect(true);
    dispatch(logout());
  }
  function handleChange(e) {
    setChecked(e.target.checked);
    dispatch(updateUserSettings({ notify: e.target.checked }));
  }
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
        {redirect ? <Redirect to="/" /> : ""}
        <button className="delete-btn" onClick={handleClose}>
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
        <h3>Профиль {data.username}</h3>
        <div className="notifications">
          Уведомления{" "}
          <label class="switch">
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="log-out" onClick={handleLogout}>
          <button className="danger-msg">Выйти</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
