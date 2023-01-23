import { useEffect } from "react";
import { connect } from "react-redux";
const Products = (props) => {
  console.log(props);
  const fetchBooks = async () => {
    const response = await fetch(
      "https://manumitsacademy.github.io/books.json"
    );
    const data = await response.json();
    console.log(data);
    props.dispatch({
      type: "FETCH_BOOKS",
      payload: data.slice(0, 100)
    });
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="book-container">
      {props.product.Products.map((item, index) => {
        const { title, thumbnailUrl, shortDescription, price } = item;
        return (
          <div key={index} className="books">
            <h3> {title} </h3>
            <img alt="title" src={thumbnailUrl} width={222} />
            <p> {shortDescription} </p>
            <h4> ${price}</h4>
            {props.cart.Cart.some((c) => c.index === index) ? (
              <button
                className="remove"
                onClick={() =>
                  props.dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: index
                  })
                }
              >
                {" "}
                Remove from cart{" "}
              </button>
            ) : (
              <button
                className="add"
                onClick={() =>
                  props.dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      index: index,
                      title: title,
                      thumbnailUrl: thumbnailUrl,
                      shortDescription: shortDescription,
                      price: price,
                      qty: 1
                    }
                  })
                }
              >
                {" "}
                Add to cart{" "}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Products);
