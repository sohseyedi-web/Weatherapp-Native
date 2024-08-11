import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  let [fontLoaded] = useFonts({
    vazir: require("../assets/fonts/Vazir.ttf"),
  });
  const [showSearch, setShowSearch] = useState(false);

  const onChangeHandler = (value) => {
    if (value.length > 0) {
      console.log(value);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* search input city */}
      <SearchInputHeader
        show={showSearch}
        toggleShow={() => setShowSearch(!show)}
        onChange={onChangeHandler}
      />
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
