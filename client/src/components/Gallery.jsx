import React, { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [page, setPage] = useState(1);
  const fetchImages = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=YOUR_ACCESS_KEY`
    );
    const data = await response.json();
    setItems((prevItems) => [...prevItems, ...data]);
    setLoading(false);
  };


  useEffect(() => {
    fetchImages(); 
  }, [page]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom && !loading) {
      setPage((prevPage) => prevPage + 1); 
    }
  };

  return (
    <div className="gallery-container" onScroll={handleScroll}>
      <div className="gallery">
        {items.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default Gallery;
