import { FaShopLock } from "react-icons/fa6";
import Category from "./category/Category";
import Colors from "./color/Colors";
import Price from "./price/Price";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1 className="shop-header">
            <FaShopLock className="shop-icon" />
            <span>Unlok</span>Shop
          </h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebar;
