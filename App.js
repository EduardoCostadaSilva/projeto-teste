import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigation from "./src/navigation/appNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    /* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Contato" component={ContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>*/

    <AppNavigation />
  );
}
/*const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.containerer}>
      <Button
        title="Vá para tela dahora"
        onPress={() => navigation.navigate("Profile")}
      />
      <Text>{'\n\n'}</Text>
      <Button
        title="🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"
        onPress={() => navigation.navigate("Contato")}
      />
    </View>
  );
};
const ContatoScreen = ({ navigation, route }) => {
  return(
  <View style={styles.container}>
    <Text>🔥🔥🔥 lá</Text>
    <Text>(47) 99912-9900</Text>
    <Text>{'\n\n\n\n'}</Text>
    <Button
        title="Voltar para a página inicial"
        onPress={() => navigation.navigate("Home")}
      />
  </View>
  );
};



const ProfileScreen = ({ navigation, route }) => {
  const [mostrarTexto, setMostrarTexto] = React.useState(false);

  const toggleTexto = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de tudo joia {"\n"}</Text>
      <Image source={imagen} style={{ width: 200, height: 200 }} />
      <Text>Você gostou do site?{"\n\n"}</Text>

      <TextInput
        style={styles.input}
        placeholder="Me de sua opinião"
        onPress={toggleTexto}
      />
      <Text>{"\n"}</Text>
      <TouchableOpacity style={styles.botao} onPress={toggleTexto}>
        <Text style={styles.textoBotao}>Meu Butão</Text>
      </TouchableOpacity>
      {mostrarTexto && <Text style={styles.texto}>{"\n"}Obrigado!!!</Text>}
      <Text>{'\n\n'}</Text>
      <Button
        title="Voltar para a página inicial"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerer: {
    flex: 1,
    alignItems: "center",
  },
  texto: {
    fontSize: "20px",
    marginBottom: "50px",
    fontStyle: "italic",
  },
  botao: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBotao: {
    color: "#fff",
    fontSize: '18px',
    fontWeight: "bold",
  },
  input: {
    color: "gray",
    border: "2px solid black",
    borderRadius: "5px",
  },
});*/
