import React from "react";
import ImageCard from "./ImageCard";
import "./css/ImageCardCollection.css";

interface ImageCardCollectionProps {
  cards: {
    imageSrc: string;
    location: string;
    year: number;
  }[];
}

const ImageCardCollection: React.FC<ImageCardCollectionProps> = ({ cards }) => {
  return (
    <div className="image-card-collection">
      {cards.map((card, index) => (
        <ImageCard
          key={index}
          imageSrc={card.imageSrc}
          location={card.location}
          year={card.year}
        />
      ))}
    </div>
  );
};

export default ImageCardCollection;
