const CartItem = () => {
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src="img/products/product3/1.png" alt="" />
        <i className="bi bi-x delete-cart" data-id="3"></i>
      </td>
      <td>Blush Beanie</td>
      <td>$38.00</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$38.00</td>
    </tr>
  );
};

export default CartItem;
