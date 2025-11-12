import Content from "./pages/Content";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import SplitScreen from "./pages/SplitScreen";

const Challenge1 = () => {
  return (
    <main className="flex h-screen flex-col bg-gray-100">
      {/* Header */}
      <header className="shadow-md z-10">
        <Header />
      </header>

      {/* Split screen main content area */}
      <section className="flex flex-1 overflow-hidden">
        <SplitScreen leftWeight={15} rightWeight={60}>
          <Sidebar />
          <Content />
        </SplitScreen>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-3">
        <Footer />
      </footer>
    </main>
  );
};

export default Challenge1;
