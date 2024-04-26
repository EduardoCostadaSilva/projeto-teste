import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";


export default function HomePage({ navigation }) {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const toggleTexto = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <View style={styles.container}>
      <Text>Tela de tudo joia</Text>
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
      {mostrarTexto && <Text style={styles.texto}>Obrigado!!!</Text>}

      <Button
        style={styles.botao}
        title="Contato"
        onPress={() => navigation.navigate("ContatoScreen")}
      ></Button>
      <Button
      style={styles.botao}
        title="Sobre"
        onPress={() => navigation.navigate("SobreScreen")}
      ></Button>
      {/*<Button
      style={styles.botao2}
        title="Voltar para a home page"
        onPress={() => navigation.navigate("HomeScreen")}
  ></Button> */}
      <Button
      style={styles.botao}
        title="Produtos"
        onPress={() => navigation.navigate("ProdutoScreen", { nome: "Laranja 🍊" })}
      ></Button>
    </View>
  );
}

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
    marginBottom: 40,
  },
  textoBotao: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
  },
  input: {
    color: "gray",
    border: "2px solid black",
    borderRadius: "5px",
  },

  botao2: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: 'white',
  },
});
