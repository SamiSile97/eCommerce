import "./App.css";
import ItemList from "./components/ItemList/itemList";
import Header from "./components/Header/header";
import SearchBar from "./components/SearchBar/searchBar";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItemCard() {
      const data = await fetch(`https://fakestoreapi.com/products`);
      const parsedData = await data.json();
      setItems(parsedData);
      console.log(parsedData);
    }
    fetchItemCard();
  }, []);
  
  return (
    <div className="App">
      <Header />
      <div className="image-grid">
        <div className="home"><p className="inner-text">Skincare</p></div>
        <div className="skincare"><p className="inner-text">Jewelry</p></div>
        <div className="electronics"><p className="inner-text">Electronics</p></div>
        <div className="jewelry"><p className="inner-text">Home</p></div>
      </div>
      <SearchBar item={items} />
      {/* <ItemList item={items} /> */}
    </div>
  );
}

export default App;
