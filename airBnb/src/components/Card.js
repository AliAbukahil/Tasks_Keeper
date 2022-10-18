import React from "react";

export default function Card({
  id,
  title,
  description,
  price,
  coverImg,
  stats: rating,
  stats: reviewCount,
  location,
  openSpots,
}) {
  return (
    <div className="card">
      <img src={`../images/${coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
