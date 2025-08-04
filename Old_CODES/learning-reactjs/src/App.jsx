import React from 'react';
import Greet from './components/Greet';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import WelcomeBack from './components/WelcomeBack';

const App = () => {
  return (
    <section style={{ marginBottom: "20px", padding: "20px" }}>
      <Header />
      <MainContent />
      <Footer />
      <div style={{ marginBottom: "20px", padding: "20px" }}>
        <h1>React JS - 19</h1>
        <Greet />
      </div>
      <WelcomeBack />
    </section>
  );
}

export default App