import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
    title: {
        color: theme.colors.mainText,
        fontFamily: theme.textVariants.weight800,
        fontSize: theme.textVariants.size1
    },
    subtitle: {
        color: theme.colors.secondaryText,
        fontFamily: theme.textVariants.weight400,
        fontSize: theme.textVariants.size4,
        marginTop: theme.spacing.s,
        marginBottom: theme.spacing.s
    },
    subtitle2: {
        color: theme.colors.secondaryText,
        fontFamily: theme.textVariants.weight400,
        fontSize: theme.textVariants.size4,
        marginBottom: theme.spacing.s
    }
})