import { RButton } from "@components/button";
import { RContainer } from "@components/container";
import { RInput } from "@components/input";
import { useTheme } from "@theme/useTheme";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { GoogleButton } from "@components/googleButton";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "@routes/stack/models";


export function SignIn() {
    const { theme } = useTheme()
    const style = styles(theme)
    const navigation = useNavigation<propStack>()

    return (
            <RContainer>
                <Text style={style.logo}>
                    LOGO
                </Text>
                <View style={style.inputContainer}>
                    <RInput placeholder="Email" icon={require('../../assets/message.png')} value=""/>
                </View>
                <View style={style.inputContainer}>
                    <RInput placeholder="Senha" icon={require('../../assets/lock.png')} value=""/>
                </View>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={style.forgotPassword}>Esqueceu a senha ?</Text>
                </TouchableOpacity>
                <RButton value="Entrar" onPress={() => navigation.navigate('Home')}/>
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