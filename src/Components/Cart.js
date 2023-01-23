import { useEffect, useState } from "react";
import { connect } from "react-redux";
const Cart = (props) => {
  console.log(props);
  const [total, setTotal] = useState(0);
  const changeQty = (index, qty) => {
    props.dispatch({
      type: "CHANE_CART_QTY",
      payload: {
        index: index,
        qty: qty
      }
    });
  };
  useEffect(() => {
    let totalPrice = props.cart.Cart.reduce((acc, total) => {
      return acc + Number(total.price) * total.qty;
    }, 0);
    setTotal(totalPrice);
  }, [props.cart.Cart]);
  return (
    <div className="cart">
      <b> CART </b>
      <b> Total:${total} </b>
      {props.cart.Cart.length > 0 ? (
        props.cart.Cart.map((item, index) => {
          return (
            <div key={index} className="cart-items">
              <h3> {item.title} </h3>
              <img alt="title" src={item.thumbnailUrl} width={150} />
              <p> {item.shortDescription} </p>
              <h4> ${item.price} </h4>
              <div>
                <button onClick={() => changeQty(item.index, item.qty - 1)}>
                  {" "}
                  -{" "}
                </button>
                <span> {item.qty} </span>
                <button onClick={() => changeQty(item.index, item.qty + 1)}>
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <span> Cart is empty</span>
      )}
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Cart);
