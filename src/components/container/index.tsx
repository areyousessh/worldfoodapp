import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { useTheme } from "@theme/useTheme";

type RContainerProps = {
    children: ReactNode
}

export function RContainer({children}: RContainerProps) {
    const {theme} = useTheme()
    const style = styles(theme)
    return (
        <View style={style.container}>
            {children}
        </View>
    )
}