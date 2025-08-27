import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 }
};

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/menu"
              element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
                  <Menu />
                </motion.div>
              }
            />
            <Route
              path="/gallery"
              element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
                  <Gallery />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}