import { SxProps } from "@mui/material";

import { Colors } from "styles";

export interface ICardStyles {
  color?: string;
  variant?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: number;
  p?: number;
  pb?: number;
  gap?: number;
  width?: string;
  height?: string;
  maxHeight?: string;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
}

export const getCardStyle = ({
  color = Colors.WHITE,
  borderColor = "transparent",
  borderWidth = 0,
  variant = "solid",
  borderRadius = "16px",
  p = 3,
  pb,
  gap = 0,
  width = "100%",
  height = "auto",
  maxHeight = "auto",
  position = "static",
}: ICardStyles): SxProps => ({
  width: width,
  p: p,
  pb: pb,
  gap: gap,
  bgcolor: color,
  height: height,
  maxHeight: maxHeight,
  borderColor: borderColor,
  borderWidth: borderWidth,
  borderRadius: borderRadius,
  borderStyle: variant,
  display: "flex",
  flexDirection: "column",
  position: position,
});
