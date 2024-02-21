import React from "react";
import { ImageCard } from "../components/ImageCard";
import { SimpleGrid } from "@chakra-ui/react";
import styles from "../styles/Gallery.module.css";

export const Gallery = () => {
  const titles = [
    "Random Title 1",
    "Random Title 2",
    "Random Title 3",
    "Random Title 4",
    "Random Title 5",
  ];

  const randomPriceFn = () => {
    return (Math.floor(Math.random() * 100) + 1).toFixed(2);
  };

  const randomTitleFn = () => {
    let index = Math.floor(Math.random() * titles.length);
    return titles[index];
  };

  const numberOfCards = Math.floor(Math.random() * 15) + 1;

  const imageCards = [];
  for (let i = 0; i < numberOfCards; i++) {
    imageCards.push(
      <ImageCard key={i} title={randomTitleFn()} price={randomPriceFn()} />
    );
  }

  return (
    <SimpleGrid
      className={styles.cont}
      placeItems={"center"}
      columns={[2, 2, 3, 5, 5, 5]}
      rowGap={"40px"}
    >
      {imageCards}
    </SimpleGrid>
  );
};
