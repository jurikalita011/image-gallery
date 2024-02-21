import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/ImageCard.module.css";
export const ImageCard = ({ title, price }) => {
  return (
    <>
      <Box
        className={styles.cont}
        h={{
          base: "210px",
          sm: "280px",
          md: "300px",
          lg: "230px",
          xl: "300px",
          "2xl": "300px",
        }}
      >
        <Image
          h={{
            base: "140px",
            sm: "180px",
            md: "70%",
            lg: "70%",
            xl: "70%",
            "2xl": "70%",
          }}
          src="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
          alt="placeholder-img"
        />
        <Box>
          <Text
            fontSize={{
              base: "12px",
              sm: "12px",
              md: "16px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            {title}
          </Text>
          <Text
            fontSize={{
              base: "12px",
              sm: "12px",
              md: "16px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            $ {price}
          </Text>
        </Box>
      </Box>
    </>
  );
};
