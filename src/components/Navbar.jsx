import { Home, Info, Phone, Images, Utensils } from "lucide-react";
import "../styles/variables.css";

const navLinks = [
  { label: "Home", idKey: "home", path: "/Home", icon: <Home size={18} /> },
  { label: "About", idKey: "about", path: "/About", icon: <Info size={18} /> },
  { label: "Menu", idKey: "menu", path: "/Menu", icon: <Utensils size={18} /> },
  {
    label: "Gallery",
    idKey: "gallery",
    path: "/Gallery",
    icon: <Images size={18} />,
  },
  {
    label: "Contact",
    idKey: "contact",
    path: "/Contact",
    icon: <Phone size={18} />,
  },
];

const Navbar = () => {
  return (
    <nav
      className="shadow-md"
      style={{
        background: "var(--color-nav-bg)",
        fontFamily: "var(--font-family)",
        boxShadow: "var(--nav-shadow)",
      }}
    >
      <ul className="flex gap-6 px-8 py-4 items-center">
        {navLinks.map(({ label, idKey, path, icon }) => (
          <li key={idKey}>
            <a
              href={path}
              className="flex items-center px-4 py-2 rounded-md transition-colors duration-200"
              style={{
                color: "var(--color-text)",
                borderRadius: "var(--border-radius)",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--color-nav-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {icon}
              <span className="ml-2">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
