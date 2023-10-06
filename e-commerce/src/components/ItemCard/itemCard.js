import "./itemCard.css";

function ItemCard({ item }) {


  let itemCard = item.map(({ image, title, price, id }) => {
    return (
      <div className="itemCard" key={id}>
        <div className="imgDiv">
          <img src={image} alt="rucksack"></img>
        </div>
        <p>{title}</p>
        <p>£{price}</p>
      </div>
    );
  });

  return <div className="itemList">{itemCard}</div>;
}

export default ItemCard;