import React, { createContext, useState } from "react";

interface CartProviderProps {
  children?: React.ReactNode;
}

interface CartItemType {
  id?: number;
  title?: string;
  price?: number;
  quantity?: number;
}

interface CartContextType {
  cartItems?: CartItemType[];
  addToCart?: (item: CartItemType) => void;
  removeFromCart?: (id: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCart = (item: CartItemType) => {
    setCartItems((prevCartItems): any => {
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id == item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems: any = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += item.price;
        return updatedCartItems;
      } else {
        return [...prevCartItems, item];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevCartItems): any => {
      return prevCartItems.filter((cartItem) => cartItem.id !== id);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
