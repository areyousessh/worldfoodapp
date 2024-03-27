import { RContainer } from "@components/container"
import { styles } from "./styles"
import { useTheme } from "@theme/useTheme"
import { RInput } from "@components/input"
import { Text, View, TouchableOpacity, FlatList, ActivityIndicator } from "react-native"
import { RScrollView } from "@components/scrollView"
import { FakeData } from "@utils/fakedata"
import { useQuery } from "@tanstack/react-query"
import { getRecipes } from "@service/getRecipes"
import { RecipeCard } from "@components/recipeCard"
import { ScrollView } from "react-native-gesture-handler"

export function Home() {
    const { theme } = useTheme()
    const style = styles(theme)
    const { data, isLoading, isError } = useQuery({queryKey: ["recipes"], queryFn: () => getRecipes()})
    console.log(data)

    return (
        <RContainer>
            <View style={style.inputContainer}>
                <RInput placeholder="Pesquise aqui sua receita" value="" icon={require("../../assets/search.png")} />
                <TouchableOpacity style={style.searchButton} activeOpacity={0.7}>
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