import "./purchase.css";
export function Purchase() {
  const lists = ["apple", "orange", "mango", "Lichi", "Strawberry", "Guava"];
  return (
    <div>
      <div className="purchase-container">
        {lists.map((item) => (
          <div className="item-div">
            <h3>Name:{item}</h3>
            <h4>Price:</h4>
            <button>Place Order</button>
          </div>
        ))}
      </div>
    </div>
  );
}
