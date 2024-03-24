import { RContainer } from "@components/container"
import { styles } from "./styles"
import { useTheme } from "@theme/useTheme"
import { RInput } from "@components/input"
import { Text, View } from "react-native"
import { RScrollView } from "@components/scrollView"
import { FakeData } from "@utils/fakedata"
import { TouchableOpacity } from "react-native"

export function Home() {
    const { theme } = useTheme()
    const style = styles(theme)

    return (
        <RContainer>
            <View style={style.inputContainer}>
                <RInput placeholder="Pesquise aqui sua receita" value="" icon={require("../../assets/search.png")} />
                <TouchableOpacity style={style.searchButton}>
                    <Text style={style.searchButtonText}>Pesquisar</Text>
                </TouchableOpacity>
            </View>
            <View style={style.categoryContainer}>
                <Text style={style.categoryText}>
                    Categoria
                </Text>
                <RScrollView data={FakeData}/>
            </View>
        </RContainer>
    )
}