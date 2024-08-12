import { View, Text, FlatList, Image } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { weatherImage } from "./../utils/weatherImage";

export default function NextDaysWeatherBox({ weather }) {
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fa-IR", { weekday: "long" });
  };

  const renderItem = ({ item }) => (
    <View
      className={`flex justify-center w-24 rounded-3xl py-3 items-center bg-slate-700 mr-4`}
    >
      <Image
        source={weatherImage[item?.day?.condition?.text.trim()]}
        className={`w-11 h-11`}
      />
      <Text className={`text-white my-1`}>{getDayName(item?.date)}</Text>
      <Text className={`text-white text-xl font-semibold`}>
        {item?.day?.avgtemp_c}&#176;
      </Text>
    </View>
  );

  return (
    <View className={`mb-2 space-y-3`}>
      <View className={`flex-row items-center my-5`}>
        <FontAwesome6 name="calendar-days" size={22} color="white" />
        <Text className={`text-white text-lg ml-3`}>Daily forecast</Text>
      </View>
      <FlatList
        data={weather?.forecast?.forecastday}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
        horizontal
        contentContainerStyle={{ paddingRight: 15 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
