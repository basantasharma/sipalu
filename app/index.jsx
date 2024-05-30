import { TouchableOpacity, ScrollView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-[#006769] h-full ">
      <ScrollView>
        <View className="flex items-center h-[85vh] justify-center px-5">
          <FontAwesome6
            name="screwdriver-wrench"
            color="#FFA62F"
            size={100}
            className="mb-3"
          />
          <Text className="text-customwhite font-bold text-5xl  text-center mt-5">
            Sipalu
          </Text>

          <Text className="text-customwhite text-xl mt-3">
            Find anyone you need
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/login")}
            className="p-5 bg-[#FFA62F] rounded-xl mt-5 w-full flex items-center "
          >
            <Text className="font-extrabold  text-md">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/signup")}
            className="p-5 bg-[#FFA62F] rounded-xl mt-5 w-full flex items-center "
          >
            <Text className="font-extrabold  text-md">Signup</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default App;
