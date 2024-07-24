import "./checkout-item.styles.scss";

const CheckoutItem = ({
  product,
  handleAddItem,
  handleRemoveItem,
  handleClearItem,
}) => {
  const { name, price, imageUrl, quantity } = product;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => handleRemoveItem(product)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => handleAddItem(product)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => handleClearItem(product)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
