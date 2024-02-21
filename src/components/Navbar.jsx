import {
  Box,
  Flex,
  Text,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { DrawerTop } from "./DrawerTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleInfo,
  faEnvelope,
  faHouseChimney,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const iconDisplay = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "flex",
    lg: "flex",
    xl: "flex",
    "2xl": "flex",
  });

  return (
    <>
      <Flex className={styles.cont}>
        <DrawerTop
          onOpen={onOpen}
          btnRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
        />

        <Flex
          className={styles.main}
          w={{
            base: "45%",
            sm: "45%",
            md: "55%",
            lg: "45%",
            xl: "45%",
            "2xl": "45%",
          }}
        >
          <Link to={"#"}>
            <Flex>
              <FontAwesomeIcon className={styles.icon} icon={faHouseChimney} />
              <Text>Home</Text>
            </Flex>
          </Link>
          <Link to={"#"}>
            <Flex display={iconDisplay}>
              <FontAwesomeIcon className={styles.icon} icon={faImages} />
              <Text>Gallery</Text>
            </Flex>
          </Link>
          <Link to={"#"}>
            <Flex display={iconDisplay}>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              <Text>Contact</Text>
            </Flex>
          </Link>
          <Link to={"#"}>
            <Flex display={iconDisplay}>
              <FontAwesomeIcon className={styles.icon} icon={faCircleInfo} />
              <Text>About</Text>
            </Flex>
          </Link>
        </Flex>
        <Box
          display={{
            base: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
            "2xl": "none",
          }}
        >
          <FontAwesomeIcon
            color="white"
            icon={faBars}
            ref={btnRef}
            onClick={() => {
              onOpen();
            }}
          />
        </Box>
      </Flex>
    </>
  );
};
