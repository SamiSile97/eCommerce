import "./App.css";
import ItemList from "./components/ItemList/itemList";
import Header from "./components/Header/header";
import SearchBar from "./components/SearchBar/searchBar";
import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchItemCard() {
      const data = await fetch(`https://fakestoreapi.com/products`);
      const parsedData = await data.json();
      setItem(parsedData);
      console.log(parsedData);
    }
    fetchItemCard();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar item={item} />
      <ItemList item={item} />
    </div>
  );
}

export default App;
