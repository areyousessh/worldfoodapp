import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.secondaryButton,
        width: "70%",
        height: theme.spacing.mm,
        borderRadius: theme.spacing.ss,
        borderColor: theme.colors.outline,
        borderWidth: 0.5,
        flexDirection: 'row'
    },
    buttonTitle: {
        color: theme.colors.buttonText,
        fontFamily: theme.textVariants.weight700,
        fontSize: theme.textVariants.size4,
        marginLeft: theme.spacing.s
    }
})