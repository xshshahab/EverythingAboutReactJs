import { FiHeart } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import {
  AiOutlineGithub,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import "./Nav.css";

const navLinks = [
  {
    href: "#",
    icon: <FiHeart className="nav-icons" />,
  },
  {
    href: "#",
    icon: <AiOutlineShoppingCart className="nav-icons" />,
  },
  {
    href: "#",
    icon: <AiOutlineUserAdd className="nav-icons" />,
  },
  {
    href: "http://www.x.com/xsh_shahab",
    icon: <FaTwitter className="nav-icons" />,
    external: true,
  },
  {
    href: "http://www.github.com/xshshahab",
    icon: <AiOutlineGithub className="nav-icons" />,
    external: true,
  },
];

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search Your Loved shoes."
        />
      </div>
      <div className="profile-container">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            {...(link.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
