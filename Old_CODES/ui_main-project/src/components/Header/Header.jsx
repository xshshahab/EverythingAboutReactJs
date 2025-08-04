import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "add-posts",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div childrenmr-4>
            <Link to="/">
              <Logo width="80px" />
            </Link>
          </div>

          <ul className="flex ml-auto">
            { 
              navItems.map((item) => item.active ? (
                <li key={item.name}>
                  <button className="inline-block py-2 duration-200 px-6 hover:bg-blue-100 rounded-full" onClick={() => navigate(item.slug)}>{item.name}</button>
                </li>
              ) : null) 
            }

            {
              authStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
