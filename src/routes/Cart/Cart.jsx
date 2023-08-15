import React, { useContext, useEffect, useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { ContextGlobal } from "../../components/utils/global.context";

const Cart = () => {
  const { state } = useContext(ContextGlobal);
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [cantidad, setCantidad] = useState(1);

  function handleCart() {
    setProducts(state.productCart);
  }

  const handleSubtotal = () => {
    return cantidad * 1;
  };

  function handleCantidad(e) {
    setCantidad(e.target.value);
  }

  useEffect(() => {
    handleCart();
  }, [state]);

  return (
    <div className="bg-danger w-100">
      <div>
        <p>Productos en el carrito</p>
      </div>
      <div className="d-flex flex-column">
        {products.map((item) => (
          <div key={item.id}>
            <CartCard product={item} />
            <div>
              <p>Cantidad</p>
              <input type="number" value={cantidad} onChange={handleCantidad} />
            </div>
            <div>
              <p>Subtotal:</p>
              <p>{handleSubtotal}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex w-100">
        <p>Total:</p>
        <p>{totalCart}</p>
      </div>
    </div>
  );
};

export default Cart;
