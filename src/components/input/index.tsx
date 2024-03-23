import { useTheme } from "@theme/useTheme";
import { Image, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type RInputProps = TextInputProps & {
    value: string,
    placeholder: string,
    icon?: any
}

export function RInput({value, placeholder, icon}: RInputProps) {
    const { theme } = useTheme()
    const style = styles(theme)
    return (
        <View style={style.container}>
            <View style={style.iconContainer}>
                <Image source={icon}/>
            </View>
            <TextInput style={style.input} placeholder={placeholder} placeholderTextColor={theme.colors.secondaryText}>
                {value}
            </TextInput>
        </View>
    )
}