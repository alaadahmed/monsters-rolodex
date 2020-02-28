import React from "react";
import "./search-box.style.css";

// Here we make Destructuring for 'props' object to get `placeholder` and `handleChange` that we will pass to the SearchBox component where we'll use it.
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
