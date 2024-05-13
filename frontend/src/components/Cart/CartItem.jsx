import PropTypes from "prop-types";
const CartItem = ({ cartItem }) => {
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.img.singleImage} alt="" />
        <i className="bi bi-x delete-cart" data-id="3"></i>
      </td>
      <td>{cartItem.name}</td>
      <td>$38.00</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$38.00</td>
    </tr>
  );
};

export default CartItem;

CartItem.propTypes = {
  cartItem: PropTypes.object,
};
