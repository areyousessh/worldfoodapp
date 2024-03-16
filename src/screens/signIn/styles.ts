import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
   logo: {
    marginBottom: theme.spacing.mm,
    fontSize: theme.spacing.mm,
    fontFamily: theme.textVariants.weight700,
    color: theme.colors.mainText
   },
   question: {
      fontFamily: theme.textVariants.weight400,
      fontSize: theme.spacing.s,
      color: theme.colors.mainText,
      marginTop: theme.spacing.s
   },
   subButton: {
      marginTop: theme.spacing.s
   },
   buttonText: {
      fontFamily: theme.textVariants.weight300,
      color: theme.colors.mainText
   }

})