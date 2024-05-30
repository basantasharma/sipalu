import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const home = () => {
  return (
    <>
      <View className="justify-center h-full items-center flex">
        <Text>Home</Text>
      </View>
      <StatusBar style="dark" />
    </>
  );
};

export default home;
