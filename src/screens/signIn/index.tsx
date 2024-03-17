import { RButton } from "@components/button";
import { RContainer } from "@components/container";
import { RInput } from "@components/input";
import { useTheme } from "@theme/useTheme";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { GoogleButton } from "@components/googleButton";

export function SignIn() {
    const { theme } = useTheme()
    const style = styles(theme)
    return (
            <RContainer>
                <Text style={style.logo}>LOGO</Text>
                <RInput placeholder="Digite seu email" value="">
                     <Text>icon</Text>
                </RInput>
                <RInput placeholder="Digite sua senha" value="" secureTextEntry>
                    <Text>icon</Text>
                </RInput>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={style.forgotPassword}>Esqueceu a senha ?</Text>
                </TouchableOpacity>
                <RButton value="Entrar"/>
                <Text style={style.question}>Ou continue com</Text>
                <GoogleButton value="Google">
                    <Text>icon</Text>
                </GoogleButton>
                <Text style={style.question}>Ainda não tem conta ?</Text>
                <TouchableOpacity style={style.subButton} activeOpacity={0.7}>
                    <Text style={style.buttonText}>Inscreva-se</Text>
                </TouchableOpacity>
            </RContainer>
    )
}