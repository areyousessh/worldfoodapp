import { ReactNode, useState } from "react";
import { ScrollView, ScrollViewProps } from "react-native";

type RScrollViewProps = ScrollViewProps & {
    children: ReactNode
}

export function RScrollView({children}: RScrollViewProps) {
    const [horizontalPos] = useState<boolean>(true)
    return (
        <ScrollView horizontal={horizontalPos}>
            {children}
        </ScrollView>
    )
}