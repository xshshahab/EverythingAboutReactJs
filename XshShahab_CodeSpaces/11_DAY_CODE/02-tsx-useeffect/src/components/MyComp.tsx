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
  page: {
    background: "#0d0d0d",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    fontFamily: "'Inter', sans-serif",
    color: "#f5f5f5",
  },
  card: {
    background: "#141414",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "50px",
    width: "100%",
    maxWidth: "1100px",
    padding: "40px",
  },
  mainImg: {
    width: "100%",
    height: "500px",
    objectFit: "cover" as const,
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
    transition: "transform 0.4s ease",
  },
  info: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
  },
  title: {
    fontSize: "42px",
    fontWeight: 700,
    marginBottom: "12px",
    color: "#ffffff",
  },
  brand: {
    fontSize: "15px",
    color: "#888",
    marginBottom: "25px",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#bbb",
    marginBottom: "35px",
    maxWidth: "90%",
  },
  priceRow: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  price: {
    fontSize: "34px",
    fontWeight: 700,
    color: "#4cafef",
  },
  discount: {
    fontSize: "15px",
    color: "#e57373",
    fontWeight: 600,
  },
  meta: {
    fontSize: "16px",
    color: "#aaa",
    marginBottom: "40px",
  },
  button: {
    background: "#4cafef",
    color: "#fff",
    padding: "16px 28px",
    borderRadius: "12px",
    border: "none",
    fontSize: "17px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center" as const,
    width: "fit-content",
  },
};

const MyComp: React.FC = () => {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/product/1");
        const product = await res.json();
        setData(product);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <main style={styles.page}>
      {data ? (
        <div style={styles.card}>
          {/* Left: Image */}
          <img src={data.thumbnail} alt="main product" style={styles.mainImg} />

          {/* Right: Info */}
          <div style={styles.info}>
            <h1 style={styles.title}>{data.title}</h1>
            <p style={styles.brand}>
              {data.brand} • {data.category}
            </p>
            <p style={styles.description}>{data.description}</p>
            <div style={styles.priceRow}>
              <span style={styles.price}>${data.price}</span>
              <span style={styles.discount}>-{data.discountPercentage}%</span>
            </div>
            <p style={styles.meta}>
              ⭐ {data.rating} / 5 | In Stock: {data.stock}
            </p>
            <button style={styles.button}>🛒 Add to Cart</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default MyComp;
