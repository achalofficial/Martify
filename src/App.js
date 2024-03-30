import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { addToCart } from "./store/actions/cartActions"; 
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My Mart</h1>
        {/* Pass addToCart function as a prop to Product components */}
        <Product id={1} name="Product 1" price={10} addToCart={addToCart} />
        <Product id={2} name="Product 2" price={15} addToCart={addToCart} />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
