import React from "react";

const cart = [
  {
    title: "SamSung",
    price: 599.99,
    amount: 5,
  },
  {
    title: "Xiomi",
    price: 699.99,
    amount: 7,
  },
  {
    title: "Iphone",
    price: 999.99,
    amount: 4,
  },
];

let total = cart.reduce(
  (total, cartItems) => {
    const { amount, price } = cartItems;
    total.totalItems += amount;
    total.cartTotal += amount * price;

    console.log(total);
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

function ReduceFnObject() {
  return <div></div>;
}

export default ReduceFnObject;
