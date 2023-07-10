import { SxProps } from "@mui/material";

import { cardSize } from "consts";
import { Colors } from "styles";

export const flipper = (isOpenCard: boolean): SxProps => ({
  textAlign: "center",
  perspective: "1200",
  transformStyle: "preserve-3d",
  position: "relative",
  width: `${cardSize}px`,
  height: `${cardSize}px`,
  transition: ".3s linear; ",
  "&.animate": {
    transform: "rotateY(180deg)",
  },
});
const sideStyles: SxProps = {
  boxSizing: "border-box",
  fontFamily: "'Cabin', sans-serif",
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
};

export const getFrontStyles = (isOpenCard: boolean): SxProps => ({
  ...sideStyles,
  zIndex: "2",
  transform: "rotateY(0deg)",
  background: "white",
  boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.1)",
  borderBottom: "1px solid #f5f5f5",
  //here

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: `${cardSize}px`,
  height: `${cardSize}px`,
  cursor: isOpenCard ? "cursor" : "pointer",
  borderRadius: 1,
  border: "1px solid",
  borderColor: Colors.PINK,
  borderWidth: "0.5px",
  img: {
    width: "80%",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export const back: SxProps = {
  ...sideStyles,
  transform: "rotateY(-180deg)",
  background: "#DCB8B2",
};
