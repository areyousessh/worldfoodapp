import axios from "axios";

type Recipe = {
    id: number
    name: string;
    ingredients: string
    images: string
    description: string
    country: string
    details: string
    howTo: string
    video: string
}

export async function getRecipes() {
    try {
        const data: Recipe[] = await axios.get("http://localhost:8000/api/recipes")
        return data
    } catch (e: any) {
        console.log(e.message)
    }
}