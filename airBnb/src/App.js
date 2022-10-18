import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import airBnbData from "./data";

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  // <Hero />
  return (
    <div>
      <Navbar />

      {airBnbData.map(
        ({
          id,
          title,
          description,
          price,
          coverImg,
          stats: rating,
          stats: reviewCount,
          location,
          openSpots,
        }) => {
          return (
            <Card
              key={id}
              title={title}
              description={description}
              price={price}
              coverImg={coverImg}
              rating={rating}
              reviewCount={reviewCount}
              location={location}
              openSpots={openSpots}
            />
          );
        }
      )}

      {/*       <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        location="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      /> */}
    </div>
  );
}
