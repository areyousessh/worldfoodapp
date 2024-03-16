import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.primaryButton,
        width: "70%",
        height: theme.spacing.xl,
        borderRadius: theme.spacing.s,
        borderColor: theme.colors.outline,
        borderWidth: 0.5,
        marginTop: theme.spacing.xl
    },
    buttonTitle: {
        color: theme.colors.buttonText,
        fontFamily: theme.textVariants.title,
        fontSize: theme.textVariants.size4,
    }
})