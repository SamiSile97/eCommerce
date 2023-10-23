import "./header.css";
function Header() {
  return (
    <div className="header">
      <img className="logo" src="./Screenshot 2023-10-20 at 17.50.37.png" alt="Shoppr Logo"></img>
      <h1 className="header-cat">Categories</h1>
      <h1 className="header-prod">Products</h1>
      <img className="cart" src="./icons8-shopping-cart-30.png" alt="Shopping cart"></img>
    </div>
  );
}

export default Header;
