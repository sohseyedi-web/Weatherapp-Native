import { View, Text, Image } from "react-native";
import { weatherImage } from "./../utils/weatherImage";
import { toPersianNumbers } from "./../utils/toPersianNumber";

export default function ResultWeather({ weather }) {
  const { current, location } = weather;
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return (
    <View className={`flex justify-around flex-1 mb-3`}>
      <Text className={`text-center text-white font-bold text-2xl`}>
        {location?.name},
        <Text className={`font-semibold text-lg text-gray-300`}>
          {" " + location?.country}
        </Text>
      </Text>
      <View className={`flex-row justify-center`}>
        <Image
          source={weatherImage[current?.condition?.text.trim()]}
          className={`w-48 h-48`}
        />
      </View>
      <View className={`my-1`}>
        <Text className={`text-white text-center ml-5 text-6xl font-semibold`}>
          {toPersianNumbers(current?.temp_c)}&#176;
        </Text>
        <Text className={`text-white text-xl text-center tracking-widest`}>
          {current?.condition?.text}
        </Text>
      </View>
      <View className={`flex-row justify-around`}>
        <View className={`flex-row items-center`}>
          <Image
            source={require("../assets/icons/wind.png")}
            className={`mr-2 w-6 h-6`}
          />
          <Text className={`font-semibold text-white text-base`}>
            {toPersianNumbers(current?.wind_kph)}km
          </Text>
        </View>
        <View className={`flex-row items-center`}>
          <Image
            source={require("../assets/icons/drop.png")}
            className={`mr-2 w-6 h-6`}
          />
          <Text className={`font-semibold text-white text-base`}>
            {toPersianNumbers(current?.humidity)}%
          </Text>
        </View>
        <View className={`flex-row items-center`}>
          <Image
            source={require("../assets/icons/sun.png")}
            className={`mr-2 w-6 h-6`}
          />
          <Text className={`font-semibold text-white text-base`}>
            {toPersianNumbers(hours)}:{toPersianNumbers(minutes)}
          </Text>
        </View>
      </View>
    </View>
  );
}
