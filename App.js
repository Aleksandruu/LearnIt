import AddText from "./app/screens/AddText";
import Home from "./app/screens/Home";
import LearnOptions from "./app/screens/LearnOptions";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./app/screens/Settings";
import Statistics from "./app/screens/Statistics";
import FillTheBlanksScreen from "./app/screens/FillTheBlanksScreen";
import ReorderScreen from "./app/screens/ReorderScreen";
import ChooseRightFormScreen from "./app/screens/ChooseRightFormScreen";
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
        <Stack.Screen
          name="LearnOptions"
          component={LearnOptions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FillTheBlanksScreen"
          component={FillTheBlanksScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReorderScreen"
          component={ReorderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseRightFormScreen"
          component={ChooseRightFormScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Statistics"
          component={Statistics}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
