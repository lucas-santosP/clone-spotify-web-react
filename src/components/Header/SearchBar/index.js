import React, { useState } from "react";
import "./styles.scss";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="searchbar-container">
      <div className="search-icon">
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>

      <input
        type="text"
        className="search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Busque artistas, músicas ou podcasts"
      />

      {searchValue !== "" ? (
        <div className="search-clear-icon" onClick={() => setSearchValue("")}>
          <svg height="24" role="img" width="24" viewBox="0 0 24 24">
            <path
              d="M4.93,4.93,19.07,19.07m-14.14,0L19.07,4.93"
              fill="none"
              stroke="currentColor"
            ></path>
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
