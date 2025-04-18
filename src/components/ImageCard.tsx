import React from "react";
import "./css/ImageCard.css";

interface ImageCardProps {
  imageSrc: string;
  location: string;
  year: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, location, year }) => {
  return (
    <div className="image-card">
      <img
        src={imageSrc}
        alt={`${location} (${year})`}
        className="image-card-img"
        loading="lazy"
      />
      <div className="image-card-text">
        {location} ({year})
      </div>
    </div>
  );
};

export default ImageCard;
