import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";


export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Soheil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "vazir",
    backgroundColor: "rgb(15 23 42)",
  },
});
