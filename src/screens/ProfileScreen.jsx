import { Button, Text, View } from "react-native";

export default function ProdutoScreen({ navigation, route }) {
  const nome = route.params.nome ? route.params.nome : "";

  return (
    <View>
      <Text>{nome ? nome : ""}</Text>
      <Text>Produto revolucionário</Text>
      <Text>Este é um produto incrível</Text>
      <Button
        title="Voltar para a home page"
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
    </View>
  );
}
