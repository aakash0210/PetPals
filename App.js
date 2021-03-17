import React, { Component } from "react";
import HomeScreen from "./containers/Home";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export class App extends Component {
	render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} navigation={this.props.navigation}/>

                </Stack.Navigator>
          </NavigationContainer>
        );
    }
}

export default App

//jayjasjdjajdsajsajsdaj
//sadsadas
//wowee
