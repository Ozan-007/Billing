import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

export default function App() {
  
  let html = "
  
  "
  


  const [urun, setUrun] = useState("");

  return (
    <View style={styles.container}>
      <Text>Welcome to the Billcon!</Text>
      <TextInput
        value={urun}
        placeholder="Ürün veya hizmetin adını giriniz..."
        style={styles.TextInput}
        onChangeText={(val) => setUrun(val)}
      />
      <Button title="Olustur" style={(backgroundColor = "red")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    backgroundColor: "#ddd",
    alignSelf: "stretch",
    padding: 8,
    margin: 8,
  },
});
