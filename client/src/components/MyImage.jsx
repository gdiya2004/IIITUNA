import React, { useState } from "react";

const MyImage = ({ imgs }) => {
  const [error, setError] = useState(false);

  return (
    <div style={styles.container}>
      {error ? (
        <img
          src="https://via.placeholder.com/400?text=Image+Not+Available"
          alt="Placeholder"
          style={styles.image}
        />
      ) : (
        <img
          src={imgs}
          alt="Service"
          onError={() => setError(true)} // Handles broken images
          style={styles.image}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    objectFit: "cover",
  },
};

export default MyImage;
