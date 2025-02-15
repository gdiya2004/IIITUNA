import React, { useEffect, useRef } from "react";
import "./Gallery.css"; // Ensure you have the CSS file

const images = [
  "event1.jpg",
  "music.jpg",
  "event3.jpg",
  "event5.jpg",
  "event2.jpg",
  "memories.jpg"
];

const Gallery = () => {
  const scrollContainers = useRef([]);

  useEffect(() => {
    scrollContainers.current.forEach((container) => {
      if (container) {
        const scrollContent = container.querySelector(".scroll-content");
        const images = [...scrollContent.children];
        
        images.forEach((img) => {
          let clone = img.cloneNode(true);
          scrollContent.appendChild(clone);
        });
      }
    });
  }, []);

  return (
    <div className="gallery-container">
      <div className="text32">
        <div className="glimpse">
          GLIMPSE
          <div className="events">events</div>
        </div>
        <div className="of-past">OF PAST</div>
      </div>

      <div className="wholegallery">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="scroll-container"
            ref={(el) => (scrollContainers.current[index] = el)}
          >
            <div className="scroll-content">
              {images.map((img, i) => (
                <div className="slide" key={i}>
                  <img src={`./images/${img}`} alt={`Gallery ${i}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
