import React from "react";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
function SearchBar() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  function handleChange(e) {
    setSearchTerm(e.target.value);
    if (redirect) {
      setRedirect(false);
    }
  }
  function handleSubmit(e) {
    if (e.key === "Enter") {
      setRedirect(true);
    }
  }
  function handleClear() {
    setSearchTerm("");
  }
  return (
    <div className="searchbar-container">
      {redirect ? <Redirect to={`/search/${searchTerm}`} /> : ""}
      <div className="searchbar">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.46667 12.9333C10.4858 12.9333 12.9333 10.4858 12.9333 7.46667C12.9333 4.44751 10.4858 2 7.46667 2C4.44751 2 2 4.44751 2 7.46667C2 10.4858 4.44751 12.9333 7.46667 12.9333ZM7.46667 14.9333C11.5904 14.9333 14.9333 11.5904 14.9333 7.46667C14.9333 3.34294 11.5904 0 7.46667 0C3.34294 0 0 3.34294 0 7.46667C0 11.5904 3.34294 14.9333 7.46667 14.9333Z"
            fill="#B0B3BC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7929 11.7929C12.1834 11.4024 12.8166 11.4024 13.2071 11.7929L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L11.7929 13.2071C11.4024 12.8166 11.4024 12.1834 11.7929 11.7929Z"
            fill="#B0B3BC"
          />
        </svg>
        <input
          placeholder="Найти вещь"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
      </div>
      {searchTerm === "" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      ) : (
        <svg
          onClick={handleClear}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L17 17" stroke="#B0B3BC" strokeWidth="2" />
          <path d="M17 1L0.999999 17" stroke="#B0B3BC" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
}

export default SearchBar;
