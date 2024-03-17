import { useTheme } from "@theme/useTheme";
import { ReactNode } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

type googleButtonProps = {
    value: string
    children?: ReactNode
}
export function GoogleButton({value, children}: googleButtonProps) {
    const {theme} = useTheme()
    const style = styles(theme)
    return (
        <TouchableOpacity style={style.container}>
            {children}
            <Text style={style.buttonTitle}>
                {value}
            </Text>
        </TouchableOpacity>
    )
}