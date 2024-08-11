import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import LocationBox from "../components/LocationBox";
import SearchInputHeader from "../components/SearchInputHeader";
import { fetchLocations } from "../api/https";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});

  const onChangeHandler = async (value) => {
    if (value.length > 0) {
      const data = await fetchLocations(value);
      setLocations(data);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView className="flex flex-1 p-4 relative mt-3">
        {/* search input city */}
        <SearchInputHeader
          show={showSearch}
          toggleShow={() => setShowSearch(!showSearch)}
          onChange={onChangeHandler}
        />
        {/* location box */}
        {locations?.length > 0 && showSearch ? (
          <LocationBox locations={locations} />
        ) : null}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(15 23 42)",
  },
});
