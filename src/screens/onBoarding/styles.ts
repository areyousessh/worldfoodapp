import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
    title: {
        color: theme.colors.mainText,
        fontFamily: theme.textVariants.title,
        fontSize: theme.textVariants.size1
    },
    subtitle: {
        color: theme.colors.secondaryText,
        fontFamily: theme.textVariants.body,
        fontSize: theme.textVariants.size4,
        marginTop: theme.spacing.s
    }
})