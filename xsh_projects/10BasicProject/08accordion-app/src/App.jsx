import Accordion from "./components/Accordion";
import { accordionData } from "./utils/content";

const App = () => {
  const appContainerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "50px 20px",
    background: "linear-gradient(135deg, #0f0f0f, #1c1c1c)",
    fontFamily: "Arial, sans-serif",
  };

  const wrapperStyle = {
    width: "700px",
    maxWidth: "100%",
    background: "#1e1e1e",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.7)",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "25px",
    color: "#0a84ff",
    letterSpacing: "1px",
  };

  return (
    <div style={appContainerStyle}>
      <div style={wrapperStyle}>
        <h1 style={headingStyle}>Frequently Asked Questions</h1>
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
