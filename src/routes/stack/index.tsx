import React from "react"
import { Home } from "@screens/home"
import { createStackNavigator } from "@react-navigation/stack"
import { OnBoarding } from "@screens/onBoarding"
import { SignIn } from "@screens/login"


const Stack = createStackNavigator()

export function Routes() {
    return (
        <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="OnBoarding" component={OnBoarding}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
    )
}
