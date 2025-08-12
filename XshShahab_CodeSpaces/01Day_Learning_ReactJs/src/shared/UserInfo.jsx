const UserInfo = () => {
  const userData = [
    {
      username: "XshShahab",
      email: "xshshahab@xsh.com",
      country: "India",
      address: "Patna, Bihar",
    },
    {
      username: "CodeMaster99",
      email: "codemaster99@example.com",
      country: "USA",
      address: "San Francisco, California",
    },
    {
      username: "PixelPenguin",
      email: "pixelpenguin@example.com",
      country: "Australia",
      address: "Sydney, New South Wales",
    },
    {
      username: "DataDragon",
      email: "datadragon@example.com",
      country: "UK",
      address: "London, England",
    },
    {
      username: "TechNinja",
      email: "techninja@example.com",
      country: "Canada",
      address: "Toronto, Ontario",
    },
    {
      username: "AIWizard",
      email: "aiwizard@example.com",
      country: "Germany",
      address: "Berlin",
    },
  ];

  return (
    <main
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {userData.map(({ username, email, country, address }) => {
        return (
          <section
            key={username}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "20px",
              width: "250px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <h1 style={{ fontSize: "1.5rem", color: "#333" }}>{username}</h1>
            <h2 style={{ fontSize: "1rem", color: "#555", margin: "5px 0" }}>
              {email}
            </h2>
            <div style={{ marginTop: "10px" }}>
              <h3
                style={{
                  fontSize: "1.1rem",
                  color: "#007bff",
                  display: "inline-block",
                  marginRight: "5px",
                }}
              >
                {country}
              </h3>
              <p style={{ display: "inline-block", color: "#666" }}>
                {address}
              </p>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default UserInfo;
