import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const links = [
    {
      href: "https://twitter.com/xsh_shahab",
      label: "Twitter",
      icon: <FaTwitter className="w-6 h-6 text-blue-500" />,
    },
    {
      href: "https://github.com/xshshahab",
      label: "GitHub",
      icon: <FaGithub className="w-6 h-6 text-gray-900" />,
    },
    {
      href: "https://instagram.com/xsh_shahab",
      label: "Instagram",
      icon: <FaInstagram className="w-6 h-6 text-pink-500" />,
    },
    {
      href: "https://www.linkedin.com/in/mdshahabuddin82/",
      label: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <section className="px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-extrabold text-gray-900">Contact Me</h2>
      <div className="flex flex-wrap items-center">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem] mb-4"
          >
            {link.icon}
            <span className="text-lg">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
