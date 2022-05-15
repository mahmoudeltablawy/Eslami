import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page0 from "./screens/Page0"
import Page1 from "./screens/Page1"
import Page2 from "./screens/Page2"
import Page3 from "./screens/Page3"
const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Page0' headerMode='none' >
                <Stack.Screen name="Page0" component={Page0} />
                <Stack.Screen name="Page1" component={Page1} />
                <Stack.Screen name="Page2" component={Page2} />
                <Stack.Screen name="Page3" component={Page3} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
