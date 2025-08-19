import Navbar from "./components/navbar/Navbar";
import { Meals } from "./components/Meals";
import Footer from "./components/footer/Footer";

export const App = () => {
  return (
    <main className="min-h-screen font-sans text-white bg-gray-900">
      <Navbar />
      <Meals />
      <Footer />
    </main>
  );
};
