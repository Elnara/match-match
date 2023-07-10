// eslint-disable-next-line @typescript-eslint/no-namespace

enum ColorKeys {
  LIGHT_GREY = "LIGHT_GREY",
  GREEN = "GREEN",
  PINK = "PINK",
  WHITE = "WHITE",
}

export const Colors: Record<ColorKeys, string> = {
  [ColorKeys.WHITE]: "#FFFFFF",
  [ColorKeys.GREEN]: "#008080",
  [ColorKeys.PINK]: "#DCB8B2",
  [ColorKeys.LIGHT_GREY]: "#F5F5F5",
};
