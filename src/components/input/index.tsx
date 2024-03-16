import { TextInput, TextInputProps } from "react-native";
import {styles} from './styles'
import { useTheme } from "@theme/useTheme";
import { ReactNode } from "react";

export type RTextInputProps = TextInputProps & {
    value: string,
    placeholder: string,
    children?: ReactNode
}

export function RInput({value, placeholder, children, ...rest}: RTextInputProps) {
    const {theme} = useTheme()
    const style = styles(theme)
    return (
        <TextInput style={style.input} placeholder={placeholder} placeholderTextColor={theme.colors.secondaryText} autoCapitalize="none" autoComplete="email" blurOnSubmit multiline={false} {...rest}>
            {children}
            {value}
        </TextInput>
    )
}