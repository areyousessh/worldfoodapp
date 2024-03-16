import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
    input: {
        width: '75%',
        height: theme.spacing.mm,
        borderWidth: 1,
        borderColor: theme.colors.outline,
        marginBottom: theme.spacing.m,
        borderRadius: theme.spacing.s,
        textAlign: 'center'
    }
})