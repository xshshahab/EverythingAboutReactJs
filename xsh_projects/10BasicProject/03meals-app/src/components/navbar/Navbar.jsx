import { Github, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.github.com/xshshahab",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.x.com/xsh_shahab",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/xsh_shahab",
    icon: Instagram,
    label: "Instagram",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-gray-950">
      <h1 className="text-2xl font-bold tracking-wide text-white">
        Unlok <span className="text-indigo-400">Meals</span>{" "}
        <span className="text-indigo-600">Store.</span>
      </h1>

      <div className="flex gap-3">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 transition-all duration-200 ease-in-out rounded-md hover:text-white hover:bg-gray-800"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
