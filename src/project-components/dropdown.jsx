import React from "react";
import "./dropdown.css";

export const WebsiteDropdown = ({storage, setStorage}) => {
  return (
    <div className="dropdown-and-localstorage-container">
      <div>
      <h2>Websites</h2>
      <select className="drop-down" name="websites" id="test">
        <option
          onClick={() => (window.location.href = "https://www.codewars.com")}
          value="code wars code"
        >
          Code Wars
        </option>

        <option
          onClick={() => (window.location.href = "https://www.hackerrank.com/")}
          value="hacker rank code"
        >
          Hacker Rank
        </option>

        <option
          onClick={() => (window.location.href = "https://leetcode.com/")}
          value="leet code"
        >
          Leetcode
        </option>

        <option
          onClick={() => (window.location.href = "https://www.w3schools.com")}
          value="W3 coding"
        >
          W3 School
        </option>
        <option
          onClick={() =>
            (window.location.href = "https://developer.mozilla.org/en-US/")
          }
          value="Mdn coding"
        >
          MDN Docs
        </option>
        <option
          onClick={() =>
            (window.location.href =
              "https://www.youtube.com/watch?v=CgkZ7MvWUAA")
          }
          value="Bro Code"
        >
          Bro Code
        </option>
      </select>
      </div>
      <div className="storage-button-container">
        
      <button onClick={()=> setStorage(current => !current)}>Add New Jobs To Local Storage
         ON | OFF</button>
      <button onClick={()=> localStorage.removeItem("newjobs")}>Clear Local Storage Of New Jobs</button>
      </div>
    </div>
  );
};
