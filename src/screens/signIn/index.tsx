import { RButton } from "@components/button";
import { RContainer } from "@components/container";
import { RInput } from "@components/input";
import { useTheme } from "@theme/useTheme";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function SignIn() {
    const { theme } = useTheme()
    const style = styles(theme)
    return (
            <RContainer>
                <Text style={style.logo}>LOGO</Text>
                <RInput placeholder="Digite seu email" value="">
             
                </RInput>
                <RInput placeholder="Digite sua senha" value="" secureTextEntry/>
                <RButton value="Entrar"/>
                <Text style={style.question}>Ou continue com</Text>
                <Text style={style.question}>Ainda não tem conta ?</Text>
                <TouchableOpacity style={style.subButton} activeOpacity={0.7}>
                    <Text style={style.buttonText}>Inscreva-se</Text>
                </TouchableOpacity>
            </RContainer>
    )
}