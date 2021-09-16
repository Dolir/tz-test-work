import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { clearError } from "../features/auth/authSlice";
function LoginModal({ modal, error }) {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    login: "",
    password: "",
    msg: null,
  });
  React.useEffect(() => {
    setState((prev) => ({ ...prev, msg: error }));
  }, [error]);
  function onChange(e) {
    setState({ ...state, [e.target.name]: e.target.value, msg: null });
    dispatch(clearError());
  }
  async function onSubmit(e) {
    e.preventDefault();
    const user = {
      email: state.login,
      password: state.password,
    };

    dispatch(login(user));
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
        <h3>Войти</h3>
        <form onSubmit={onSubmit}>
          <ul className="login-pass">
            <li>
              <span>Логин</span>
              <input onChange={onChange} name="login" />
            </li>
            <li>
              <span>Пароль</span>
              <input onChange={onChange} name="password" type="password" />{" "}
            </li>
          </ul>
          <p className="danger-msg">{state.msg}</p>
          <button className="submit-btn">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
