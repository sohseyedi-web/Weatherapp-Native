import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import LocationBox from "../components/LocationBox";
import SearchInputHeader from "../components/SearchInputHeader";
import { fetchLocations, fetchWeatherForecast } from "../api/https";
import ResultWeather from "../components/ResultWeather";
import NextDaysWeatherBox from "../components/NextDaysWeatherBox";
import * as Progress from "react-native-progress";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const handleSubmitLocation = async (loc) => {
    setLoading(true);
    try {
      const data = await fetchWeatherForecast(loc?.name, "7");
      setShowSearch(false);
      setLocations("");
      setWeather(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onChangeHandler = async (value) => {
    if (value.length > 0) {
      const data = await fetchLocations(value);
      setLocations(data);
    }
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    const data = await fetchWeatherForecast("tehran", "7");
    setWeather(data);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {loading ? (
        <View className="flex-1 flex-row justify-center items-center">
          <Progress.CircleSnail thickness={5} size={75} color={"#fff"} />
        </View>
      ) : (
        <SafeAreaView className="flex flex-1 p-4 relative mt-3">
          {/* search input city */}
          <SearchInputHeader
            show={showSearch}
            toggleShow={() => setShowSearch(!showSearch)}
            onChange={onChangeHandler}
          />
          {/* location box */}
          {locations?.length > 0 && showSearch ? (
            <LocationBox
              locations={locations}
              handleLoc={handleSubmitLocation}
            />
          ) : null}
          {/* result city weather */}
          <ResultWeather weather={weather} />
          {/* next days weather data*/}
          <NextDaysWeatherBox weather={weather} />
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(15 23 42)",
  },
});
