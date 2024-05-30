import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const Signup = () => {
  return (
    <SafeAreaView className="bg-primarybg h-full">
      <ScrollView className="  px-5 ">
        <View className="flex min-h-[85vh]  justify-center flex-col space-y-5  ">
          <Text className="text-customwhite text-3xl font-semibold text-left">
            Username
          </Text>

          <TextInput className="px-2 text-customwhite h-10 bg-[#2C7865] rounded-xl mt-5 w-full" />

          <Text className="text-customwhite text-3xl font-semibold text-left">
            Password
          </Text>

          <TextInput className=" px-2 h-10 text-customwhite bg-[#2C7865] rounded-xl mt-5 w-full" />

          <TouchableOpacity className="p-5 bg-[#FFA62F] rounded-xl mt-5 w-full flex items-center ">
            <Text className="font-extrabold  text-md">Signup</Text>
          </TouchableOpacity>
          <Text className="text-customwhite text-center">
            Already have an account?{" "}
            <Link href="/login">
              <Text className="text-primarycolor font-semibold">Login</Text>
            </Link>{" "}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
