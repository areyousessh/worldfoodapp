import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
   buttonCategory: {
        backgroundColor: theme.colors.primaryButton,
        width: theme.spacing.l,
        height: theme.spacing.mm,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: theme.spacing.s,
        marginTop: theme.spacing.m,
        marginBottom: theme.spacing.m,
        marginLeft: theme.spacing.ss,
        borderWidth: 1,
        borderColor: theme.colors.outline
   },
   
   buttonText: {
    textAlign: 'center',
    color: theme.colors.mainBackground,
    fontFamily: theme.textVariants.weight600
   }
})