import React, { FC } from "react";

import { CircularProgress, Typography } from "@mui/material";

import { useImage } from "hooks";

interface IImage {
  src: string;
  alt?: string;
}
const Image: FC<IImage> = ({ src, alt = "" }) => {
  const { loading, error, image } = useImage(src);

  if (error) return <Typography>{alt}</Typography>;

  return <>{loading ? <CircularProgress /> : <img src={image} alt={alt} />}</>;
};

export default Image;
