import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '65%',
        height: 50,
        borderWidth: 1,
        borderColor: theme.colors.outline,
        borderRadius: theme.spacing.s,
        alignItems: 'center',
    },
    iconContainer: {
        marginLeft: theme.spacing.s
    },
    input: {
        textAlign: 'center',
        height: 50,
        width: '65%',
        marginLeft: theme.spacing.s
    }
})