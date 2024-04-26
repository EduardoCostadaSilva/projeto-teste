import { Button, StyleSheet, Text, View } from "react-native";


export default function SobreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Ola Mundo</Text>
      <Button
      style={styles.botao2}
        title="Voltar para a home page"
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botao2: {
    backgroundColor: "red",
  },
});
