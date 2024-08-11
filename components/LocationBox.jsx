import { View, FlatList, TouchableOpacity, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function LocationBox({ locations }) {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => handleLoc(item)}
      className={`flex-row items-center p-3 cursor-pointer ${
        locations.length != index + 1 ? "border-b-2 border-gray-700" : ""
      }`}
    >
      <Feather name="map-pin" size={20} color="#FF4C4C" />
      <Text className={`text-lg font-semibold ml-4 text-white`}>
        {item?.name}, {item?.country}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      className={`absolute cursor-pointer w-full top-2 bg-gray-900 rounded-3xl`}
    >
      <FlatList
        data={locations}
        renderItem={renderItem}
        keyExtractor={(item) => item?.name}
      />
    </View>
  );
}
