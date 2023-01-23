import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Products />
        <Cart />
      </div>
    </Provider>
  );
}
