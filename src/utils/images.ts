import { maxCardsCount } from "consts";
import { mixArray } from "utils";

export const generateImagePairs = (imagesCount: number) => {
  const availableImages = Array.from(
    { length: maxCardsCount / 2 },
    (v, i) => `${i + 1}.png`
  );

  const imagesHalf = mixArray(availableImages).slice(0, imagesCount / 2);

  return mixArray([...imagesHalf, ...imagesHalf]).map((image: string) => ({
    id: Math.random(),
    path: image,
  }));
};
