import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./stack";

export function Router() {
    return (
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
    )
}