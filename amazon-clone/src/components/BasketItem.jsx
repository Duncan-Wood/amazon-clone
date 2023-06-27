import React from "react";
import "./BasketItem.css";
import { useStateValue } from "../StateProvider";

const BasketItem = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="basketItem">
      <img className="basketItem__image" src={image} alt="" />
      <div className="basketItem__info">
        <p className="basketItem__title">{title}</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default BasketItem;
