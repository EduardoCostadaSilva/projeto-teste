import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContatoScreen from "../screens/ContatoScreen";
import HomePage from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";

import ProdutoScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomePage}
          options={{
            title: "Minha página fooof",
          }}
        />
        <Stack.Screen
          name="ContatoScreen"
          component={ContatoScreen}
          options={{
            title: "Minha página vnh",
          }}
        />
        <Stack.Screen
          name="SobreScreen"
          component={SobreScreen}
          options={{
            title: "Minha página pibc´ru",
          }}
        />
         <Stack.Screen
          name="ProdutoScreen"
          component={ProdutoScreen}
          options={{
            title: "Minha página Produto",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
