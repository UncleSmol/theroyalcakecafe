import create from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  addItem: (product) => {
    const items = get().items.slice();
    const idx = items.findIndex((i) => i.id === product.id);
    if (idx >= 0) {
      items[idx].quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }
    set({ items });
  },
  removeItem: (id) => {
    set({ items: get().items.filter((i) => i.id !== id) });
  },
  updateQuantity: (id, quantity) => {
    const items = get().items.map((i) => (i.id === id ? { ...i, quantity } : i));
    set({ items });
  },
  clear: () => set({ items: [] }),
  totalItems: () => get().items.reduce((s, i) => s + i.quantity, 0),
  totalPrice: () => get().items.reduce((s, i) => s + i.price * i.quantity, 0)
}));