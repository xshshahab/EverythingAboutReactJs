import { useState } from "react";

const AdvProfile = () => {
  const [prf, setPrf] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPrf((prevPrf) => ({
      ...prevPrf,
      [name]: value,
    }));
  };

  // Inline styles for dark mode
  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#f5f5f5",
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "30px",
      borderBottom: "2px solid #333",
      paddingBottom: "10px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      maxWidth: "400px",
      marginBottom: "40px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "5px",
      fontSize: "1rem",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #333",
      backgroundColor: "#1e1e1e",
      color: "#fff",
      fontSize: "1rem",
    },
    userInfo: {
      textAlign: "center",
    },
    userText: {
      fontSize: "1.5rem",
      margin: "10px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>User Profile</h1>

      <div id="form" style={styles.form}>
        <div id="form-name" style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={prf.name}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div id="form-age" style={styles.formGroup}>
          <label htmlFor="age" style={styles.label}>
            Age
          </label>
          <input
            name="age"
            type="text"
            placeholder="Enter your age"
            value={prf.age}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      </div>

      <div id="user" style={styles.userInfo}>
        <h2 style={styles.userText}>Name: {prf.name || "N/A"}</h2>
        <h2 style={styles.userText}>Age: {prf.age || "N/A"}</h2>
      </div>
    </div>
  );
};

export default AdvProfile;
