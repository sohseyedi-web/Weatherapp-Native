import { View, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchInputHeader({ show, onChange, toggleShow }) {
  return (
    <View
      className={`flex-row rounded-full justify-end items-center ${
        show ? " bg-slate-600" : "transparent"
      }`}
    >
      <TextInput
        onChangeText={onChange}
        placeholder="Search City..."
        placeholderTextColor={"lightgray"}
        className={`flex-1 h-9 pb-1 pl-6 text-lg text-white`}
      />
      <TouchableOpacity
        onPress={toggleShow}
        className="m-1 p-3 rounded-full bg-slate-800"
      >
        <Ionicons name="search-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}
