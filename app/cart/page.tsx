"use client";

import Price from "@/components/Price";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = item.discount
      ? item.price * (1 - item.discount / 100)
      : item.price;
    return sum + price * (item.quantity ? item.quantity : 1);
  }, 0);

  return (
    <main className="container">
      <h1 className="mb-5">Shopping Cart</h1>
      <span className="text-sm opacity-40">
        {cart.length} {cart.length === 1 ? "item" : "items"}
      </span>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between border border-gray-400 dark:border-gray-500 py-4 px-5 rounded-lg"
            >
              <div className="relative flex gap-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-[150px] max-h-[180px] object-cover rounded-lg"
                />
                {item.discount && (
                  <span className="text-xs absolute top-[5px] left-[5px] px-2 py-1 flex justify-center items-center bg-red-500 text-white rounded-full">
                    -{item.discount}%
                  </span>
                )}
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-sm sm:text-lg">{item.title}</h3>
                  <Price price={item.price} discount={item.discount} />
                  <div className="flex items-center gap-2">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-12 h-7 border rounded p-1 bg-[--color-light-2] text-[--color-dark] dark:bg-[--color-dark-2] dark:text-[--color-light]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col w-full sm:w-auto justify-between items-center gap-3">
                <span className="font-bold">
                  $
                  {item.discount
                    ? (
                        item.price *
                        (1 - item.discount / 100) *
                        (item.quantity ? item.quantity : 1)
                      ).toFixed(2)
                    : (
                        item.price * (item.quantity ? item.quantity : 1)
                      ).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 border px-3 py-1 rounded-lg hover:border-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </main>
  );
}
