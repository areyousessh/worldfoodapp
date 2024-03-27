import { Image, Text, TouchableOpacity } from "react-native";

type RecipeCardProps = {
    imageUrl?: string;
    name: string;
}

export function RecipeCard({imageUrl, name}: RecipeCardProps) {
    return (
        <TouchableOpacity>
            <Image src={imageUrl}/>
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}