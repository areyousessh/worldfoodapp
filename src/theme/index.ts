const palette = {
  whitePrimary: "#FFFFFF",
  greenPrimary: "#1FCC79",
  redPrimary: "#FF5872",
  greyPrimary: "#2E3E5C",
  secondaryGrey: "#9FA5C0",
  thirdGrey: "#D0DBEA",
  whiteSecondary: "#F4F5F7",
  fourthGrey: "#F3EFEE",
  fiftyGrey: "#A3A1A0",
  sixtyGrey: "#393838"
}

const fonts = {
weight100: "Poppins-Thin",
weight200: "Poppins-ExtraLight",
weight300: "Poppins-Light",
weight400: "Poppins-Regular",
weight500: "Poppins-Medium",
weight600: "Poppins-SemiBold",
weight700: "Poppins-Bold",
weight800: "Poppins-ExtraBold",
size1: 32,
size2: 27,
size3: 25,
size4: 18,
size5: 12,
}

export const lightTheme = ({
  colors: {
      mainBackground: palette.whitePrimary,
      primaryButton: palette.greenPrimary,
      secondaryButton: palette.redPrimary,
      mainText: palette.greyPrimary,
      secondaryText: palette.secondaryGrey,
      outline: palette.thirdGrey,
      input: palette.whiteSecondary,
      buttonText: palette.whiteSecondary,
  },
  spacing: {
    ss: 8,
    s: 16,
    m: 24,
    mm: 40,
    g: 60,
    gg: 70,
    l: 80,
    xl: 90,
  },
  textVariants: {
    weight100: fonts.weight100,
    weight200: fonts.weight200,
    weight300: fonts.weight300,
    weight400: fonts.weight400,
    weight500: fonts.weight500,
    weight600: fonts.weight600,
    weight700: fonts.weight700,
    weight800: fonts.weight800,
    size1: fonts.size1,
    size2: fonts.size2,
    size3: fonts.size3,
    size4: fonts.size4,
    size5: fonts.size5,
  },
});

export type Theme = typeof lightTheme

export const darkTheme = {
  ...lightTheme,
  colors: {
      mainBackground: palette.sixtyGrey,
      primaryButton: palette.greenPrimary,
      secondaryButton: palette.redPrimary,
      mainText: palette.whitePrimary,
      secondaryText: palette.fourthGrey,
      outline: palette.thirdGrey,
      input: palette.fiftyGrey,
      buttonText: palette.whiteSecondary
  },
  spacing: {
    ss: 8,
    s: 16,
    m: 24,
    mm: 40,
    g: 60,
    gg: 70,
    l: 80,
    xl: 90,
},
textVariants: {
  weight100: fonts.weight100,
  weight200: fonts.weight200,
  weight300: fonts.weight300,
  weight400: fonts.weight400,
  weight500: fonts.weight500,
  weight600: fonts.weight600,
  weight700: fonts.weight700,
  weight800: fonts.weight800,
  size1: fonts.size1,
  size2: fonts.size2,
  size3: fonts.size3,
  size4: fonts.size4,
  size5: fonts.size5,
},
}