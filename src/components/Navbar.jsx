import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems)();

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-[var(--color-dark)] font-bold">RC</div>
              <div>
                <NavLink to="/" className="text-lg font-bold">
                  The Royal Cake Bakery
                </NavLink>
                <div className="text-xs text-gray-500">Shiny treats, regal taste</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <NavLink to="/" className={({isActive}) => isActive ? "text-[var(--color-gold)] font-semibold" : "hover:text-[var(--color-gold)]"}>
                Home
              </NavLink>
              <NavLink to="/menu" className={({isActive}) => isActive ? "text-[var(--color-gold)] font-semibold" : "hover:text-[var(--color-gold)]"}>
                Menu
              </NavLink>
              <NavLink to="/gallery" className={({isActive}) => isActive ? "text-[var(--color-gold)] font-semibold" : "hover:text-[var(--color-gold)]"}>
                Gallery
              </NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? "text-[var(--color-gold)] font-semibold" : "hover:text-[var(--color-gold)]"}>
                About
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? "text-[var(--color-gold)] font-semibold" : "hover:text-[var(--color-gold)]"}>
                Contact
              </NavLink>
            </div>

            <button
              aria-label="Open cart"
              onClick={() => setOpen(true)}
              className="relative bg-[var(--color-silver)] p-2 rounded-md hover:scale-105 transition-transform"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--color-dark)]">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="20" r="1" fill="currentColor" />
                <circle cx="18" cy="20" r="1" fill="currentColor" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-gold)] text-[var(--color-dark)] px-2 rounded-full text-xs font-semibold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile dropdown */}
            <div className="md:hidden">
              <details className="relative">
                <summary className="cursor-pointer p-2 bg-[var(--color-silver)] rounded-md">Menu</summary>
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md p-2 flex flex-col gap-2">
                  <NavLink to="/" onClick={() => {}} className="hover:text-[var(--color-gold)]">Home</NavLink>
                  <NavLink to="/menu" className="hover:text-[var(--color-gold)]">Menu</NavLink>
                  <NavLink to="/gallery" className="hover:text-[var(--color-gold)]">Gallery</NavLink>
                  <NavLink to="/about" className="hover:text-[var(--color-gold)]">About</NavLink>
                  <NavLink to="/contact" className="hover:text-[var(--color-gold)]">Contact</NavLink>
                </div>
              </details>
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}