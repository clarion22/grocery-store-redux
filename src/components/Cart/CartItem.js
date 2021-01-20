import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart'

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const addItem = (e) => {
    e.preventDefault();
    setCount(count + 1);
  }
  const decreaseItem = (e) => {
    e.preventDefault();
    if (count === 1) removeItem(e)
    setCount(count - 1);
  }

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(item.id));
  };

  return (
    <li className="cart-item">
      <div className="cart-item-header">
        {item.name}
      </div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={addItem}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={decreaseItem}
        >
          -
        </button>
        <button
          onClick={removeItem}
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li >
  )
}

export default CartItem;
