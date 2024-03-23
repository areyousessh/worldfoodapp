import { ReactNode, useState } from "react";
import { ScrollView, ScrollViewProps, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { useTheme } from "@theme/useTheme";

type RScrollViewProps = ScrollViewProps & {
    data: any[]
}

export function RScrollView({data}: RScrollViewProps) {
    const { theme } = useTheme()
    const style = styles(theme)
    const [horizontalPos] = useState<boolean>(true)
    return (
        <ScrollView horizontal={horizontalPos}>
             {data.map((value) => {
                return (
                    <TouchableOpacity key={value.id} style={style.buttonCategory}>
                        <Text style={style.buttonText}>
                            {value.name}
                        </Text>
                    </TouchableOpacity>
                )
             })}
        </ScrollView>
    )
}