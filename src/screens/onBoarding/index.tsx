import { RContainer } from "@components/container"
import { Text } from "react-native"
import { useTheme } from "@theme/useTheme"
import { styles } from "./styles"
import { RButton } from "@components/button"
import { useNavigation } from "@react-navigation/native"
import { propStack } from "@routes/stack/models"

export function OnBoarding() {
    const { theme } = useTheme()
    const style = styles(theme)
    const navigation = useNavigation<propStack>()
    return (
        <RContainer>
            <Text style={style.title}>Vamos cozinhar</Text>
            <Text style={style.subtitle}>junte-se a comunidade</Text>
            <Text style={style.subtitle2}>aprenda diversas receitas </Text>
            <RButton onPress={() => navigation.navigate('SignIn')} value="Vamos lá"/>
        </RContainer>
    )
}