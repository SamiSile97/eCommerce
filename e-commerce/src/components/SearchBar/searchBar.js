import React from "react";
import { useState } from "react";
import "./searchBar.css"

function SearchBar({ item }) {
  const [input, setInput] = useState("");
  const [searchedItem, setSearchedItem] = useState(false);

  function handleChange(e) {
    setInput(e.target.value);
    setSearchedItem(false);
  }

  function handleSearch() {
    setSearchedItem(true);
  }

  const filteredItems = searchedItem
    ? item.filter((item) => {
        return item.title.toLowerCase().includes(input.toLowerCase());
      })
    : item;

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search here"
        value={input}></input>
      <button className="button" onClick={handleSearch}>Search</button>
      <div className="item-list-two">
        {filteredItems.map((item) => (
            <div className="item-card-two">
                <img src={item.image} alt="rucksack"></img>
                <h3>{item.title}</h3>
                <p>£{item.price}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;