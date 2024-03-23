import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
    inputContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: theme.spacing.m
    },
    categoryContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: theme.spacing.s,
        marginTop: theme.spacing.s

    },
    categoryText: {
        fontFamily: theme.textVariants.weight600,
        fontSize: theme.spacing.s,
        color: theme.colors.mainText,
    }
})