import ItemCard from "../ItemCard/itemCard";
import "./itemList.css";

function ItemList({ item }) {
  return (
    <div className="ItemList">
      <ItemCard item={item} />
    </div>
  );
}

export default ItemList;
