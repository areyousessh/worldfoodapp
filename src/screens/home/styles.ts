import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
    safeContainer: {
        marginTop: theme.spacing.m,
        backgroundColor: theme.colors.mainBackground,
        display: 'flex',
        flex: 1,
    },
    
    inputContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: theme.spacing.m
    },

    searchButton: {
        marginLeft: theme.spacing.s,
        borderWidth: 1,
        borderColor: theme.colors.outline,
        width: theme.spacing.xl,
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: theme.spacing.s,
        backgroundColor: theme.colors.secondaryButton
    },

    searchButtonText: {
        fontFamily: theme.textVariants.weight600,
        color: theme.colors.mainBackground
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
    },
   
    textButton: {
        textAlign: 'center',
        color: theme.colors.mainBackground,
        fontFamily: theme.textVariants.weight500
    }
})