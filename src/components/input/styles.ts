import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
    input: {
        width: '75%',
        height: 50,
        borderWidth: 1,
        borderColor: theme.colors.outline,
        marginBottom: theme.spacing.m,
        borderRadius: theme.spacing.s,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        marginLeft: theme.spacing.s,
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    }
})