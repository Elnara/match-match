import { SxProps } from "@mui/material";

import { Colors } from "styles";

export const wrapper: SxProps = {
  width: "calc(100% - 48px)",
  height: "100%",
  minHeight: "100vh",
  p: 3,
  margin: "0 auto",
  bgcolor: Colors.LIGHT_GREY,
};
