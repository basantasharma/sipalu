import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const Authlayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#006769",
        },
        headerTintColor: "#ffffff",
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Login",

          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <FontAwesome name="arrow-left" size={16} color="white" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Authlayout;

const styles = StyleSheet.create({});
