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
    background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
    minHeight: "100vh",
  },
  card: {
    width: "700px",
    background: "rgba(30, 30, 30, 0.9)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#f5f5f5",
    backdropFilter: "blur(12px)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
  },
  thumbnail: {
    width: "150px",
    height: "150px",
    borderRadius: "15px",
    marginRight: "20px",
    objectFit: "cover" as const,
    border: "2px solid #333",
    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
  },
  title: {
    margin: "0",
    fontSize: "26px",
    fontWeight: 700,
    color: "#00e676", // neon green accent
    textShadow: "0px 0px 8px rgba(0,230,118,0.6)",
  },
  brand: {
    color: "#bbb",
    margin: "6px 0",
    fontSize: "14px",
  },
  category: {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    background: "#2a2a2a",
    color: "#aaa",
    marginTop: "4px",
  },
  description: {
    marginBottom: "20px",
    lineHeight: "1.6",
    color: "#ddd",
    fontSize: "15px",
  },
  priceWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  price: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#00e676",
  },
  discount: {
    fontSize: "14px",
    background: "#ff1744",
    padding: "3px 8px",
    borderRadius: "6px",
    color: "#fff",
    fontWeight: 600,
  },
  rating: {
    marginBottom: "10px",
    color: "#ffca28", // gold stars
  },
  stock: {
    fontSize: "14px",
    color: "#aaa",
    marginBottom: "20px",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "12px",
  },
  galleryImg: {
    width: "100%",
    borderRadius: "12px",
    border: "1px solid #333",
    objectFit: "cover" as const,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
};

const MyComp: React.FC = () => {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/1");
        const result = await response.json();
        setData(result);
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
          {/* Header */}
          <div style={styles.header}>
            <img
              src={data?.thumbnail}
              alt={data?.brand}
              style={styles.thumbnail}
            />
            <div>
              <h1 style={styles.title}>{data?.title}</h1>
              <p style={styles.brand}>Brand: {data?.brand}</p>
              <span style={styles.category}>{data?.category}</span>
            </div>
          </div>

          {/* Description */}
          <p style={styles.description}>{data?.description}</p>

          {/* Price Section */}
          <div style={styles.priceWrapper}>
            <p style={styles.price}>${data?.price}</p>
            <span style={styles.discount}>-{data?.discountPercentage}%</span>
          </div>

          {/* Rating & Stock */}
          <p style={styles.rating}>⭐ {data?.rating} / 5</p>
          <p style={styles.stock}>Stock Available: {data?.stock}</p>

          {/* Gallery */}
          <h3 style={{ margin: "15px 0", color: "#fff" }}>Gallery</h3>
          <div style={styles.gallery}>
            {data?.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="product"
                style={styles.galleryImg}
                onMouseOver={(e) =>
                  ((e.target as HTMLImageElement).style.transform =
                    "scale(1.05)")
                }
                onMouseOut={(e) =>
                  ((e.target as HTMLImageElement).style.transform = "scale(1)")
                }
              />
            ))}
          </div>
        </section>
      ) : (
        <p style={{ color: "#fff" }}>Loading...</p>
      )}
    </main>
  );
};

export default MyComp;
