/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { ContextGlobal } from "../../components/utils/global.context";

const Cart = () => {
  const { state } = useContext(ContextGlobal);
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [arrSubtotal, setArrSubtotal] = useState([]);

  function handleCart() {
    setProducts(state.productCart);
  }

  function handleRemoveFromCart(productId) {
    const updatedSubtotals = arrSubtotal.filter((sub) => sub.id !== productId);
    setArrSubtotal(updatedSubtotals);
  }

  function handleSubtotal(data) {
    if (!arrSubtotal.find((prod) => prod.id === data.id)) {
      setArrSubtotal((arr) => [...arr, data]);
    } else {
      const newArr = arrSubtotal.map((product) => {
        if (product.id === data.id) {
          return { ...product, subtotal: data.subtotal };
        }
        return product;
      });
      console.log(newArr);
      setArrSubtotal(newArr);
    }
  }

  function handletotal() {
    const total = arrSubtotal.reduce((acc, item) => acc + item.subtotal, 0);
    setTotalCart(total);
  }

  useEffect(() => {
    handleCart();
  }, [state]);

  useEffect(() => {
    handletotal();
  }, [arrSubtotal, setTotalCart]);

  return (
    <div className="w-100">
      <div className="my-3 pb-3">
        <p className="fw-bold fs-3 text-verdeoscurodott m-0 p-0 achicarLetra">
          Productos en el carrito:
        </p>
      </div>
      <div className="d-flex justify-content-between convertirColumna">
        <div className="d-flex flex-column">
          {products.map((item, index) => (
            <div key={item.id}>
              {index == 0 ? <hr className="text-verdedott fs-4" /> : ""}
              <CartCard
                product={item}
                subTotalProduct={handleSubtotal}
                removeFromArr={handleRemoveFromCart}
              />
              <hr className="text-verdedott fs-3" />
            </div>
          ))}
        </div>
        <div
          className="d-flex flex-column border border-verdedott rounded-3 p-4"
          style={{ height: "fit-content" }}
        >
          <p className="fs-4 fw-bold">Total:</p>
          <p className="fw-bold fs-4 text-verdedottclaro">${totalCart}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
