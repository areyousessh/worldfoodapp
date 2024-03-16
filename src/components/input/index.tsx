import { ReactNode } from "react";
import { Text, TextInput, TextInputProps } from "react-native";
import {styles} from './styles'
import { useTheme } from "@theme/useTheme";

export type RTextInputProps = TextInputProps & {
    value: string,
    placeholder: string,
}

export function RInput({value, placeholder, ...rest}: RTextInputProps) {
    const {theme} = useTheme()
    const style = styles(theme)
    return (
        <TextInput style={style.input} placeholder={placeholder} placeholderTextColor={theme.colors.secondaryText} 
        autoCapitalize="none" autoComplete="email" blurOnSubmit multiline={false} {...rest}>
            {value}
        </TextInput>
    )
}