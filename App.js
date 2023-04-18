import AddText from "./app/screens/AddText";
import Home from "./app/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddText"
          component={AddText}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Second" component={SecondScreen} />
          <Stack.Screen
            name="Third"
            component={ThirdScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </NavigationContainer>
  );
}
