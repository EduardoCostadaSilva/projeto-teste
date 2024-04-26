import { Button, StyleSheet, Text, View } from "react-native";

export default function ContatoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello Mundo!?</Text>
      <Button
      style={styles.botao2}
        title="Sobre"
        onPress={() => navigation.navigate("SobreScreen")}
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: 'white',
  },
});
