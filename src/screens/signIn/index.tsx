import { RButton } from "@components/button";
import { RContainer } from "@components/container";
import { RInput } from "@components/input";
import { useTheme } from "@theme/useTheme";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { GoogleButton } from "@components/googleButton";
import IconMail from "@assets/svg/mail.svg"
import Lock from "@assets/svg/Lock.svg"


export function SignIn() {
    const { theme } = useTheme()
    const style = styles(theme)
    return (
            <RContainer>
                <Text style={style.logo}>LOGO</Text>
                <RInput placeholder="Digite seu email" value="" />
                <RInput placeholder="Digite sua senha" value="" secureTextEntry />
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