import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";

const login = () => {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const handleLogin = () => {
    if (username !== " " && password !== " ") {
      router.push("/home");
    }
  };
  return (
    <SafeAreaView className="bg-primarybg h-full">
      <ScrollView className="  px-5 ">
        <View className="flex min-h-[85vh]  justify-center flex-col space-y-5  ">
          <Text className="text-customwhite text-3xl font-semibold text-left">
            Username
          </Text>

          <TextInput
            onChange={(e) => setUserName(e.target.value)}
            className="px-2 text-customwhite h-10 text-[500] font-semibold bg-[#2C7865] rounded-xl mt-5 w-full"
          />

          <Text className="text-customwhite text-3xl font-semibold text-left">
            Password
          </Text>
          <View className="flex-row items-center bg-[#2C7865] rounded-xl mt-5 justify-center w-full">
            <TextInput
              className=" px-2 flex-1 text-[500] font-semibold h-10 text-customwhite  w-full bg-transparent "
              onChange={(e) => setPassword(e.target.value)}
              secureTextEntry={!visible}
            />
            <Pressable onPress={() => setVisible(!visible)}>
              {visible ? (
                <FontAwesome
                  name="eye-slash"
                  size={20}
                  color="white"
                  style={{ marginRight: 10 }}
                />
              ) : (
                <FontAwesome
                  name="eye"
                  size={20}
                  color="white"
                  style={{ marginRight: 10 }}
                />
              )}
            </Pressable>
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            className="p-5 bg-[#FFA62F] rounded-xl mt-5 w-full flex items-center "
          >
            <Text className="font-extrabold  text-md">Login</Text>
          </TouchableOpacity>
          <Text className="text-customwhite text-center">
            Dont have account?{" "}
            <Link href="/signup">
              <Text className="text-primarycolor font-semibold">SignUp</Text>
            </Link>{" "}
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
