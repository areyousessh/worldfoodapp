import { Theme } from "@theme/index"
import { StyleSheet } from "react-native"

export const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.mainBackground,
    },
})