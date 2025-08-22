import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    background: "linear-gradient(160deg, #0f0f0f, #1c1c1c)",
    minHeight: "100vh",
    color: "#f0f0f0",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    width: "1000px",
    background: "rgba(30, 30, 30, 0.95)",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.7)",
    overflow: "hidden",
  },
  gallery: {
    background: "#151515",
    padding: "20px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
    alignItems: "center",
  },
  mainImg: {
    width: "100%",
    height: "350px",
    objectFit: "cover" as const,
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
    transition: "transform 0.3s ease",
  },
  thumbRow: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  thumbImg: {
    width: "70px",
    height: "70px",
    borderRadius: "10px",
    objectFit: "cover" as const,
    cursor: "pointer",
    border: "2px solid transparent",
    transition: "0.3s",
  },
  info: {
    padding: "30px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "10px",
    color: "#00e676",
  },
  brand: {
    fontSize: "14px",
    color: "#bbb",
    marginBottom: "20px",
  },
  description: {
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#ddd",
  },
  priceRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "15px",
  },
  price: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#00e676",
  },
  discount: {
    fontSize: "14px",
    background: "#ff1744",
    padding: "4px 10px",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: 600,
  },
  rating: {
    color: "#ffca28",
    marginBottom: "15px",
  },
  stock: {
    fontSize: "14px",
    color: "#aaa",
    marginBottom: "25px",
  },
  button: {
    background: "linear-gradient(90deg, #00e676, #00c853)",
    color: "#000",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 4px 20px rgba(0,230,118,0.5)",
  },
};

const MyComp: React.FC = () => {
  const [data, setData] = useState<Product | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/1");
        const result = await response.json();
        setData(result);
        setSelectedImg(result.thumbnail);
      } catch (error) {
        console.log("ERROR! ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main style={styles.container}>
      {data ? (
        <section style={styles.card}>
          {/* Gallery */}
          <div style={styles.gallery}>
            <img
              src={selectedImg || data.thumbnail}
              alt="main"
              style={styles.mainImg}
            />
            <div style={styles.thumbRow}>
              {data?.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="thumb"
                  style={{
                    ...styles.thumbImg,
                    border:
                      selectedImg === img
                        ? "2px solid #00e676"
                        : "2px solid transparent",
                  }}
                  onClick={() => setSelectedImg(img)}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div style={styles.info}>
            <div>
              <h1 style={styles.title}>{data.title}</h1>
              <p style={styles.brand}>
                {data.brand} • {data.category}
              </p>
              <p style={styles.description}>{data.description}</p>
              <div style={styles.priceRow}>
                <span style={styles.price}>${data.price}</span>
                <span style={styles.discount}>-{data.discountPercentage}%</span>
              </div>
              <p style={styles.rating}>⭐ {data.rating} / 5</p>
              <p style={styles.stock}>Stock: {data.stock} available</p>
            </div>
            <button style={styles.button}>🛒 Add to Cart</button>
          </div>
        </section>
      ) : (
        <p style={{ color: "#fff" }}>Loading...</p>
      )}
    </main>
  );
};

export default MyComp;
