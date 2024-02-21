import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import {
  faCircleInfo,
  faEnvelope,
  faHouseChimney,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/DrawerTop.module.css";

export const DrawerTop = ({ btnRef, isOpen, onClose }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"black"}>
          <DrawerCloseButton color={"white"} />

          <DrawerBody>
            <Flex className={styles.flexCont}>
              <Link to={"#"}>
                <Flex>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faHouseChimney}
                  />
                  <Text>Home</Text>
                </Flex>
              </Link>
              <Link to={"#"}>
                <Flex>
                  <FontAwesomeIcon className={styles.icon} icon={faImages} />
                  <Text>Gallery</Text>
                </Flex>
              </Link>
              <Link to={"#"}>
                <Flex>
                  <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                  <Text>Contact</Text>
                </Flex>
              </Link>
              <Link to={"#"}>
                <Flex>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faCircleInfo}
                  />
                  <Text>About</Text>
                </Flex>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
