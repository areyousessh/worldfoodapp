import { useTheme } from "@theme/useTheme";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles"

type RButtonProps = TouchableOpacityProps & {
    value: string
}

export function RButton({value, ...rest}: RButtonProps) {
    const {theme} = useTheme()
    const style = styles(theme)
    return (
        <TouchableOpacity style={style.container} activeOpacity={0.7} {...rest}>
            <Text style={style.buttonTitle}>
                {value}
            </Text>
        </TouchableOpacity>
    )
}